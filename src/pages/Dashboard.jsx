import React, { useState } from "react";
import {
  PlusIcon,
  UploadCloudIcon,
  FilePenLineIcon,
  XIcon,
  LoaderCircleIcon,
  UploadCloud,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "../configs/api";
import toast from "react-hot-toast";
import pdfToText from "react-pdftotext";

const Dashboard = () => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [showCreateResume, setShowCreateResume] = useState(false);
  const [showUploadResume, setShowUploadResume] = useState(false);

  const [title, setTitle] = useState("");
  const [resume, setResume] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const createResume = async (event) => {
    try {
      event.preventDefault();

      const { data } = await api.post(
        "/api/resumes/create",
        { title },
        { headers: { Authorization: token } }
      );

      setShowCreateResume(false);
      setTitle("");

      navigate(`/app/builder/${data.resume._id}`);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const uploadResume = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      const resumeText = await pdfToText(resume);

      const { data } = await api.post(
        "/api/ai/upload-resume",
        { title, resumeText },
        { headers: { Authorization: token } }
      );

      navigate(`/app/builder/${data.resumeId}`);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900">
            Resume Dashboard
          </h1>
          <p className="text-slate-500 mt-2">
            Create, upload and manage your resumes with AI assistance
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CREATE */}
          <button
            onClick={() => setShowCreateResume(true)}
            className="bg-white border border-slate-200 rounded-2xl h-60 flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
          >
            <PlusIcon className="size-14 text-indigo-600" />
            <p className="font-semibold text-lg">Create Resume</p>
          </button>

          {/* UPLOAD */}
          <button
            onClick={() => setShowUploadResume(true)}
            className="bg-white border border-slate-200 rounded-2xl h-60 flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
          >
            <UploadCloudIcon className="size-14 text-purple-600" />
            <p className="font-semibold text-lg">Upload Resume</p>
          </button>

          {/* MY RESUMES */}
          <button
            onClick={() => navigate("/app/my-resumes")}
            className="bg-white border border-slate-200 rounded-2xl h-60 flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
          >
            <FilePenLineIcon className="size-14 text-green-600" />
            <p className="font-semibold text-lg">My Resumes</p>
          </button>

        </div>

        {/* CREATE MODAL */}
        {showCreateResume && (
          <form
            onSubmit={createResume}
            className="fixed inset-0 bg-black/50 flex items-center justify-center"
          >
            <div className="bg-white w-[400px] p-6 rounded-xl relative">
              <h2 className="text-xl font-bold mb-4">Create Resume</h2>

              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Resume Title"
                className="border w-full p-3 rounded"
                required
              />

              <button className="w-full mt-4 bg-indigo-600 text-white p-3 rounded">
                Create
              </button>

              <XIcon
                className="absolute top-4 right-4 cursor-pointer"
                onClick={() => setShowCreateResume(false)}
              />
            </div>
          </form>
        )}

        {/* UPLOAD MODAL */}
        {showUploadResume && (
          <form
            onSubmit={uploadResume}
            className="fixed inset-0 bg-black/50 flex items-center justify-center"
          >
            <div className="bg-white w-[450px] p-6 rounded-xl relative">

              <h2 className="text-xl font-bold mb-4">Upload Resume</h2>

              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Resume Title"
                className="border w-full p-3 rounded mb-4"
                required
              />

              <label htmlFor="resume">
                <div className="border-2 border-dashed rounded-xl p-8 text-center cursor-pointer hover:bg-slate-50">
                  <UploadCloud className="mx-auto mb-2" />
                  {resume ? resume.name : "Choose PDF Resume"}
                </div>
              </label>

              <input
                id="resume"
                hidden
                type="file"
                accept=".pdf"
                onChange={(e) => setResume(e.target.files[0])}
              />

              <button className="w-full mt-4 bg-indigo-600 text-white p-3 rounded flex items-center justify-center gap-2">
                {isLoading && <LoaderCircleIcon className="animate-spin" />}
                {isLoading ? "Uploading..." : "Upload Resume"}
              </button>

              <XIcon
                className="absolute top-4 right-4 cursor-pointer"
                onClick={() => setShowUploadResume(false)}
              />
            </div>
          </form>
        )}

        {/* INFO SECTION (CLEANED) */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-10 text-white">

          <h2 className="text-3xl font-bold">
            Build ATS Friendly Resumes with AI
          </h2>

          <p className="mt-3 text-indigo-100 max-w-2xl">
            Create professional resumes, improve them with AI suggestions,
            and download instantly in PDF format.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="bg-white/10 p-5 rounded-xl">
              <h3 className="font-bold text-xl">ATS</h3>
              <p className="text-indigo-100 mt-2 text-sm">
                Optimized templates for recruiters
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-xl">
              <h3 className="font-bold text-xl">AI</h3>
              <p className="text-indigo-100 mt-2 text-sm">
                Smart resume improvements
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-xl">
              <h3 className="font-bold text-xl">PDF</h3>
              <p className="text-indigo-100 mt-2 text-sm">
                One-click download
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;