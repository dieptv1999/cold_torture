'use client';
import {useFormik} from "formik";
import * as Yup from "yup";
import InputCom from "@/components/InputCom";
import axios from "axios";
import {forEach, reduce} from "lodash/collection";
import {useEffect, useState} from "react";
import Link from "next/link";
import {get} from "lodash/object";

const schema = Yup.object().shape({
    plates:
        Yup.string()
            .matches(/^[0-9a-zA-Z-.]{8,20}$/g, 'Biển số xe sai định dạng')
            .required('Bạn cần nhập biển số xe để tiếp tục'),
    type: Yup.number()
        .min(1, 'Loại phương tiện không hợp lệ')
        .max(3, 'Loại phương tiện không hợp lệ')
        .required('Loại phương tiện không hợp lệ'),
})

export default function Filter({}) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState()

    const formik = useFormik({
        initialValues: {
            plates: '',
            type: 1,
        },
        validationSchema: schema,
        onSubmit: async values => {
            if (loading) return;
            let formData = new FormData();

            formData.append('plates', values.plates.trim().replaceAll('-', '').replaceAll('.', ''))
            formData.append('type', values.type)

            setLoading(true)
            const resp = await axios.post('http://swagger.photonx.org:8080/photonx/api/transport/check_violating_vehicle',
                formData,
                {})
            setLoading(false)

            if (resp.status === 200) {
                setData(JSON.parse(resp.data.data))
            } else {
                alert('Lấy thông tin biển số xe không thành công')
            }
        },
    })

    const transformPlace = (text) => {
        if (text.startsWith('1.')) {
            let listText = [];
            listText = [...listText, text.substring(0, text.indexOf('2.'))]
            listText = [...listText, text.substring(text.indexOf('2.'))]

            return listText
        } else return text
    }

    const countError = data && get(data, 'message')?.length > 0 ?
        reduce(get(data, 'message'), (rlt, e) => {
            if (e === 'ĐÃ XỬ PHẠT') return rlt + 1
            else return rlt
        }, 0)
        : 0

    useEffect(() => {
        if (typeof window !== 'undefined') {
            formik.setFieldValue('type', 1)
        }
    }, []);

    return (
        <div className="w-full flex flex-col">
            <form className="flex flex-col space-y-2" onSubmit={formik.handleSubmit}>
                <fieldset
                    className="inline-flex space-x-2"
                >
                    <label className="label cursor-pointer">
                        <input
                            type="radio"
                            name="type"
                            checked={formik.values.type === 1}
                            className="radio checked:bg-red-500"
                            onChange={e => formik.setFieldValue('type', 1)}
                        />
                        <span className="label-text ml-2">Ô tô</span>
                    </label>
                    <label className="label cursor-pointer">
                        <input
                            type="radio"
                            name="type"
                            checked={formik.values.type === 2}
                            onChange={e => formik.setFieldValue('type', 2)}
                            className="radio checked:bg-red-500"/>
                        <span className="label-text ml-2">Xe máy</span>
                    </label>
                    <label className="label cursor-pointer">
                        <input
                            type="radio"
                            name="type"
                            checked={formik.values.type === 3}
                            onChange={e => formik.setFieldValue('type', 3)}
                            className="radio checked:bg-red-500"/>
                        <span className="label-text ml-2">Xe máy điện</span>
                    </label>
                </fieldset>
                <InputCom
                    name={'plates'}
                    value={formik.values.plates}
                    inputHandler={formik.handleChange}
                    label={'Biển số'}
                    error={formik.errors.plates}
                    type={'text'}
                    inputType={'input'}
                    required={true}
                    placeholder={'Biển số xe'}
                    onBlur={formik.handleBlur}
                />
                <button
                    type={'submit'}
                    className="btn btn-accent"
                >
                    Kiểm tra phạt nguội
                    {loading ? <span className="loading loading-spinner"></span> : null}
                </button>
            </form>
            {loading
                ? null
                : data && get(data, 'message')?.length > 0 ?
                    <div className={'flex flex-col w-full space-y-4 my-4'}>
                        <div className={'flex flex-col w-full items-center space-y-2'}>
                            <div className={'text-lg md:text-xl'}>Phát hiện <span
                                className="text-red-500">{get(data, 'message')?.length}</span> lỗi vi phạm. Trong đó
                            </div>
                            <div className={'flex space-x-2'}>
                                <div
                                    className={'border px-4 py-2 rounded border-green-500 text-green-500 uppercase'}>{countError} Chưa xử phạt</div>
                                <div
                                    className={'border px-4 py-2 rounded border-red-500 text-red-500 uppercase'}>{get(data, 'message')?.length - countError} Đã xử phạt</div>
                            </div>
                        </div>
                        {
                            get(data, 'message')?.map((e, idx) => (
                                <div className="flex flex-col w-full border rounded-lg p-2 md:p-4" key={idx}>
                                    <div className='flex justify-between w-full space-x-4 border-b pb-2'>
                                        <div className='min-w-[150px]'>Biển kiểm soát</div>
                                        <div className="text-end text-green-500">{get(e, 'Biển kiểm soát')}</div>
                                    </div>
                                    <div className='flex justify-between w-full space-x-4 border-b py-2'>
                                        <div className='min-w-[150px]'>Màu biển</div>
                                        <div className="text-end">{get(e, 'Màu biển')}</div>
                                    </div>
                                    <div className='flex justify-between w-full space-x-4 border-b py-2'>
                                        <div className='min-w-[150px]'>Loại phương tiện</div>
                                        <div className="text-end">{get(e, 'Loại phương tiện')}</div>
                                    </div>
                                    <div className='flex justify-between w-full space-x-4 border-b py-2'>
                                        <div className='min-w-[150px]'>Thời gian vi phạm</div>
                                        <div className="text-end">{get(e, 'Thời gian vi phạm')}</div>
                                    </div>
                                    <div className='flex justify-between w-full space-x-4 border-b py-2'>
                                        <div className='min-w-[150px]'>Địa điểm vi phạm</div>
                                        <div className="text-end">{get(e, 'Địa điểm vi phạm')}</div>
                                    </div>
                                    <div className='flex justify-between w-full space-x-4 border-b py-2'>
                                        <div className='min-w-[150px]'>Hành vi vi phạm</div>
                                        <div className="text-end">{get(e, 'Hành vi vi phạm')}</div>
                                    </div>
                                    <div className='flex justify-between w-full space-x-4 border-b py-2'>
                                        <div className='min-w-[150px]'>Trạng thái</div>
                                        <div className="text-end">{
                                            get(e, 'Trạng thái') === 'ĐÃ XỬ PHẠT'
                                                ? <div
                                                    className={'border px-4 py-2 rounded border-green-500 text-green-500'}>{get(e, 'Trạng thái')}</div>
                                                : <div
                                                    className={'border px-4 py-2 rounded border-red-500 text-red-500'}>{get(e, 'Trạng thái')}</div>
                                        }</div>
                                    </div>
                                    <div className='flex justify-between w-full space-x-4 border-b py-2'>
                                        <div className='min-w-[150px]'>Đơn vị phát hiện vi phạm</div>
                                        <div className="text-end">{get(e, 'Đơn vị phát hiện vi phạm')}</div>
                                    </div>
                                    <div className='flex justify-between w-full space-x-4 pt-2'>
                                        <div className='min-w-[150px]'>Nơi giải quyết vụ việc</div>
                                        <div className="text-end">{
                                            typeof transformPlace(get(e, 'Nơi giải quyết vụ việc')) === 'string'
                                                ? transformPlace(get(e, 'Nơi giải quyết vụ việc'))
                                                : <div className="flex flex-col space-y-1">
                                                    {transformPlace(get(e, 'Nơi giải quyết vụ việc')).map(y => (
                                                        <div>{y}</div>
                                                    ))}
                                                </div>
                                        }</div>
                                    </div>
                                </div>
                            ))}
                    </div>
                    : <div className="flex flex-col w-full items-center my-3 space-y-4">
                        <div className={'text-xl md:text-2xl text-red-500'}>Xe của bạn không có lỗi vi phạm</div>
                        <Link href={'https://www.csgt.vn/'} passHref>
                            <button className="uppercase btn btn-error btn-outline">
                                Kiểm tra lại trên csgt.vn
                            </button>
                        </Link>
                    </div>}
        </div>
    )
}