import React, { useState } from 'react';
import styled from 'styled-components';

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const FormContainer = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
`;

const FormButton = styled.button`
  padding: 10px;
  width: 100%;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const AccountPage = () => {
  const [formData, setFormData] = useState({
    userName: '',
    age: '',
    avgTypingScore: '',
    maxTypingScore: '',
    rank: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add logic to handle form submission (e.g., send data to server, store in database, etc.)

    // For demonstration purposes, logging form data to console
    console.log('Form data submitted:', formData);
  };

  return (
    <AccountContainer>
      <h2>Create an Account</h2>
      <FormContainer onSubmit={handleSubmit}>
        <FormInput
          type="text"
          placeholder="User Name"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />
        <FormInput
          type="number"
          placeholder="Age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <FormInput
          type="number"
          placeholder="Average Typing Score"
          name="avgTypingScore"
          value={formData.avgTypingScore}
          onChange={handleChange}
        />
        <FormInput
          type="number"
          placeholder="Max Typing Score"
          name="maxTypingScore"
          value={formData.maxTypingScore}
          onChange={handleChange}
        />
        <FormInput
          type="text"
          placeholder="Rank"
          name="rank"
          value={formData.rank}
          onChange={handleChange}
        />
        <FormButton type="submit">Create Account</FormButton>
      </FormContainer>
    </AccountContainer>
  );
};

export default AccountPage;
