'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DialogForm from '../ui/dialog-form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { BadgeCheck, Bug } from 'lucide-react';

const DialogFormDemo = () => {
  const [shouldSucceed, setShouldSucceed] = useState(true);
  const { register, watch, reset } = useForm({
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        details: yup.string().required('Details are required')
      })
    )
  });

  const ChildComponent = () => {
    return (
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-3">
          <Input
            placeholder="Name"
            autoComplete="off"
            className="border-white/10 hover:border-white/15 bg-black"
            {...register('name')}
          />
          <Input
            placeholder="Email"
            autoComplete="off"
            className="border-white/10 hover:border-white/15 bg-black"
            {...register('email')}
          />
        </div>
        <Textarea
          placeholder="Provide details about the issue..."
          autoComplete="off"
          className="border-white/10 hover:border-white/15 bg-black"
          rows={5}
          style={{
            resize: 'none'
          }}
          {...register('details')}
        />
      </div>
    );
  };

  const onCloseCb = () => {
    reset();
  };

  const handleSubmit = async () => {
    const formData = watch();
    console.log(formData);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setShouldSucceed(!shouldSucceed);

    const response = shouldSucceed
      ? { success: true, message: 'Form submitted successfully' }
      : { success: false, message: 'Something went wrong' };

    return response;
  };

  return (
    <div>
      <DialogForm
        icon={<Bug size={16} />}
        label="Report a Bug"
        successIcon={<BadgeCheck size={40} />}
        successText="Reported Successfully"
        childComponent={<ChildComponent />}
        onSubmit={handleSubmit}
        onClose={onCloseCb}
      />
    </div>
  );
};

export default DialogFormDemo;
