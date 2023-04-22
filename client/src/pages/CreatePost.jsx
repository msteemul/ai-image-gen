import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';
const handleSubmit = (e) => {
  console.log(e);
};
const handleChange = (e) => {
  console.log(e);
};
const handleSurpriseMe = () => {
  console.log('surprise me');
}

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: getRandomPrompt(),
    photo: '',
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w[500px]">
          Create imaginative and visually stunning images generated from DALL-E
          AI and share them with the community.
        </p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            Label="yourName"
            name="name"
            placeholder="JohnDoe"
            value={form.name}
            handleChange={handleChange}
          />

          <FormField
            Label="Prompt"
            type="text"
            name="prompt"
            placeholder="A plush toy sitting against a yellow wall"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe={handleSurpriseMe}
          />
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
