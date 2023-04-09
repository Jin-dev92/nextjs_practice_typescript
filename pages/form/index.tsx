import {NextPage} from "next";
import React from 'react';
import {useForm} from "react-hook-form";

const FormPage: NextPage = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<any>();
    const [data, setData] = React.useState(null)
    const onSubmit = (data: any) => {
        setData(data)
    }
    return (
        <div className={`container mx-auto flex flex-col justify-center items-center`}>
            <form className={`mx-auto`} onSubmit={handleSubmit(onSubmit)}>
                <label className="flex flex-col">
                    <span className="block text-sm font-medium text-slate-700">Username</span>
                    <input type="text" className="form-input" {...register("username", {required:true, maxLength: 10})}/>
                    {errors.username && <p className={`text-sm text-red-700 before:content-['*']`}>이름은 10글자 보다 클 수 없습니다.</p>}
                </label>
                <div className={`flex flex-col justify-center mt-3`}>
                    <button type={"submit"} className={`rounded border-slate-300 border px-3 py-2`}>확인</button>
                </div>
            </form>
            <article>
                {data && JSON.stringify(data)}
            </article>
        </div>
    );

}
export default FormPage