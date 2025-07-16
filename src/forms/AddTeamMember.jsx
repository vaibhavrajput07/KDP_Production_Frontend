import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

function AddTeamMember() {
    const location = useLocation();
    const navigate = useNavigate();
    const memberToEdit = location.state?.member;

    const [form, setForm] = useState({ name: '', title: '' });
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState('');
    const [editId, setEditId] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        if (memberToEdit) {
            setForm({ name: memberToEdit.name, title: memberToEdit.title });
            setEditId(memberToEdit._id);
            setPreviewImage(memberToEdit.imageUrl);
        }
    }, [memberToEdit]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setFormErrors({ ...formErrors, [e.target.name]: '' });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormErrors({ ...formErrors, image: '' }); // Clear any previous error

        if (file) {
            const maxSize = 5 * 1024 * 1024; // 5MB
            const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];

            if (!allowedTypes.includes(file.type)) {
                setFormErrors(prev => ({
                    ...prev,
                    image: 'Only JPG, JPEG, or PNG files are allowed.'
                }));
                setImage(null);
                setPreviewImage('');
                return;
            }

            if (file.size > maxSize) {
                setFormErrors(prev => ({
                    ...prev,
                    image: 'Image size must be less than 5MB.'
                }));
                setImage(null);
                setPreviewImage('');
                return;
            }

            setImage(file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };


    const validateForm = () => {
        const errors = {};

        if (!form.name.trim()) {
            errors.name = 'Name is required.';
        } else if (form.name.trim().length < 3) {
            errors.name = 'Name must be at least 3 characters.';
        }

        if (!form.title.trim()) {
            errors.title = 'Role is required.';
        }

        if (!editId && !image) {
            errors.image = 'Profile image is required.';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');
        if (!validateForm()) return;
        setIsLoading(true);

        const data = new FormData();
        data.append('name', form.name);
        data.append('title', form.title);
        if (image) data.append('image', image);

        try {
            let res;
            if (editId) {
                res = await axios.put(`${import.meta.env.VITE_API_URL}/api/members/${editId}`, data, {
                    withCredentials: true,
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
            } else {
                res = await axios.post(`${import.meta.env.VITE_API_URL}/api/members`, data, {
                    withCredentials: true,
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
            }

            setSuccessMessage(res.data.message || 'Operation successful.');
            setForm({ name: '', title: '' });
            setImage(null);
            setEditId(null);
            setFormErrors({});
            setTimeout(() => navigate('/about'), 1000); // 1-second delay
        } catch (error) {
            const status = error.response?.status;
            if (status === 403 || status === 401) {
                setErrorMessage('Unauthorized. Please login again.');
                setTimeout(() => navigate('/login'), 1500);
            } else {
                const msg = error.response?.data?.message || 'Something went wrong!';
                setErrorMessage(msg);
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleReset = () => {
        setForm({ name: '', title: '' });
        setImage(null);
        setPreviewImage('');
        setEditId(null);
        setFormErrors({});
    };

    return (
        <div className="min-h-screen flex mt-18 justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-lg rounded-2xl p-4">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-10">
                    {editId ? 'Edit Member' : 'Add Team Member'}
                </h2>

                {successMessage && <p className="text-green-600 text-center mb-4">{successMessage}</p>}
                {errorMessage && <p className="text-red-600 text-center mb-4">{errorMessage}</p>}

                {/* Name */}
                <div className="mb-6">
                    <label className="block font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        placeholder="Enter full name"
                    />
                    {formErrors.name && <p className="text-sm text-red-500 mt-1">{formErrors.name}</p>}
                </div>

                {/* Role Dropdown */}
                <div className="mb-6">
                    <label className="block font-medium text-gray-700 mb-1">Select Role</label>
                    <select
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-400 outline-none"
                    >
                        <option value="">-- Choose Role --</option>
                        <option value="Creator">Creator</option>
                        <option value="Editor">Choreographer</option>
                        <option value="Editor">Editor</option>
                        <option value="Editor">Camera Man</option>
                        <option value="Editor">Dancer</option>
                        <option value="Designer">Designer</option>
                        <option value="Developer">Developer</option>
                    </select>
                    {formErrors.title && <p className="text-sm text-red-500 mt-1">{formErrors.title}</p>}
                </div>

                {/* Image Upload */}
                <div className="mb-6">
                    <label className="block font-medium text-gray-700 mb-1">Profile Image</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/jpeg, image/jpg, image/png"
                        onChange={handleImageChange}
                        className="w-full p-2.5 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                    />
                    {previewImage && (
                        <img
                            src={previewImage}
                            alt="Preview"
                            className="w-24 h-24 mt-4 rounded-full object-cover border"
                        />
                    )}
                    {formErrors.image && (
                        <p className="text-sm text-red-500 mt-1">{formErrors.image}</p>
                    )}

                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                >
                    {isLoading ? 'Processing...' : editId ? 'Update Member' : 'Add Member'}
                </button>

                {/* Optional Reset */}
                <button
                    type="button"
                    onClick={handleReset}
                    className="w-full mt-4 py-3 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-400 transition"
                >
                    Reset
                </button>
            </form>
        </div>
    );
}

export default AddTeamMember;
