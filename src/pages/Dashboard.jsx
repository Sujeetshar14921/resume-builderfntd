import React, { useState } from "react";
import {
  PlusIcon,
  UploadCloudIcon,
  FilePenLineIcon,
  XIcon,
  LoaderCircleIcon,
  UploadCloud
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
    <div className="max-w-6xl mx-auto px-6 py-10">

      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Resume Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Create, Upload and Manage Resumes
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        <button
          onClick={() => setShowCreateResume(true)}
          className="bg-white border rounded-3xl h-64 flex flex-col items-center justify-center gap-4 hover:shadow-xl transition-all"
        >
          <PlusIcon className="size-16 text-indigo-600" />
          <p className="font-semibold text-lg">
            Create Resume
          </p>
        </button>

        <button
          onClick={() => setShowUploadResume(true)}
          className="bg-white border rounded-3xl h-64 flex flex-col items-center justify-center gap-4 hover:shadow-xl transition-all"
        >
          <UploadCloudIcon className="size-16 text-purple-600" />
          <p className="font-semibold text-lg">
            Upload Existing Resume
          </p>
        </button>

        <button
          onClick={() => navigate("/app/my-resumes")}
          className="bg-white border rounded-3xl h-64 flex flex-col items-center justify-center gap-4 hover:shadow-xl transition-all"
        >
          <FilePenLineIcon className="size-16 text-green-600" />
          <p className="font-semibold text-lg">
            My Resumes
          </p>
        </button>

      </div>

      {/* Create Resume Modal */}

      {showCreateResume && (
        <form
          onSubmit={createResume}
          className="fixed inset-0 bg-black/60 flex justify-center items-center"
        >
          <div className="bg-white p-6 rounded-xl w-[400px] relative">

            <h2 className="text-xl font-bold mb-4">
              Create Resume
            </h2>

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

      {/* Upload Modal */}

      {showUploadResume && (
        <form
          onSubmit={uploadResume}
          className="fixed inset-0 bg-black/60 flex justify-center items-center"
        >
          <div className="bg-white p-6 rounded-xl w-[450px] relative">

            <h2 className="text-xl font-bold mb-4">
              Upload Resume
            </h2>

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Resume Title"
              className="border w-full p-3 rounded mb-4"
              required
            />

            <label htmlFor="resume">
              <div className="border-2 border-dashed rounded-xl p-10 text-center cursor-pointer">
                <UploadCloud className="mx-auto mb-3" />
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

            <button className="w-full mt-4 bg-green-600 text-white p-3 rounded flex justify-center items-center gap-2">
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
    </div>
  );
};

export default Dashboard;