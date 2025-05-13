import React from 'react';
import { useForm } from 'react-hook-form';
import './MyForm.css';

type FormData = {
  name: string;
  email: string;
};

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Name</label>
            <input
              {...register('name', { required: 'Name is required' })}
              placeholder="Enter your name"
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email format',
                },
              })}
              placeholder="Enter your email"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MyForm;
