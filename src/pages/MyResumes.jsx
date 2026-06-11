import React, { useEffect, useState } from "react";
import { FilePenLineIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "../configs/api";
import toast from "react-hot-toast";

const MyResumes = () => {

  const [allResumes, setAllResumes] = useState([]);
  const { token } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const loadResumes = async () => {
    try {
      const { data } = await api.get("/api/users/resumes", {
        headers: { Authorization: token }
      });

      setAllResumes(data.resumes);

    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    loadResumes();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <button
        onClick={() => navigate("/app")}
        className="mb-8 text-indigo-600"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-8">
        My Resumes
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {allResumes.map((resume) => (
          <div
            key={resume._id}
            onClick={() => navigate(`/app/builder/${resume._id}`)}
            className="bg-white border rounded-2xl p-6 cursor-pointer hover:shadow-xl transition-all"
          >
            <FilePenLineIcon className="size-10 text-indigo-600 mb-4" />

            <h2 className="font-semibold">
              {resume.title}
            </h2>

            <p className="text-sm text-slate-500 mt-2">
              Updated:
              {" "}
              {new Date(resume.updatedAt).toLocaleDateString()}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default MyResumes;