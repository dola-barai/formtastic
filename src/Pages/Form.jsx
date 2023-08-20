import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Swal from 'sweetalert2';

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = user => {
        console.log(user);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'User added successfully',
                        'success'
                    )

                }
            })
        
    }
    console.log(errors);



    return (
        <div>
            <Link to='/'><button className="inline-flex text-right text-blue-600">Ballon Page<span><BsArrowRight className="mt-1 ms-1"></BsArrowRight></span></button></Link>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                        <div className="card-body">
                            <h3 className='text-xl font-serif my-3 '>User Form</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type="text" className="input input-bordered" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} /> <br /> <br />
                                <input type="email" className="input input-bordered" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} /> <br /> <br />

                                <button className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="text-center lg:text-left">
                        <img
                            className="h-screen w-screen"
                            src="https://img.freepik.com/free-vector/blog-post-concept-illustration_114360-244.jpg?w=740&t=st=1692548201~exp=1692548801~hmac=e72fa76b58931e8689bc6b19b4cd8480b9a1521fcf09668186c0fef232778f4e"
                            alt="" />
                    </div>

                </div>
            </div>
        </div>
        //<div>
        //  <div
        //      className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-full md:flex-row">
        //      <
        //      <div className=''>
        //      <div className="flex flex-col mx-80 my-40 p-6">
        //          <form onSubmit={handleSubmit(onSubmit)}>
        //              <input type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} /> <br /> <br />
        //              <input type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} /> <br /> <br />
        //              
        //              <input type="submit" />
        //          </form>
        //      </div>
        //      </div>
        //  </div>
        //</div>
    );
};

export default Form;


