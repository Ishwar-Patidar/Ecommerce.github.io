import { useForm } from "react-hook-form";

function AddUser(){

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return(
        <> 
            <div className="">
                <div className="d-flex content-justify-center">
                    <h5 >Please Add User Information</h5>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col4">
                            <label>First Name</label>
                            <input {...register("firstName")} />
                            <input type="submit" />
                        </div>
                        <div className="col-4">
                            <label>Last Name</label>
                            <input {...register("lasttName", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                    </div>
                </form>
            </div>
          
        </>
    )
}
export default AddUser;