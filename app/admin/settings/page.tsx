"use client";
import { useState } from "react";
import Form from '@/components/settings/profile';
import Security from "@/components/settings/security";
import Moderator from "@/components/settings/moderator";

const SettingsPage = () => {
    const [show, setShow] = useState("profile");

    return (
        <div className="bg-white h-[600px] w-[90%] mx-auto">
            <div className="flex gap-x-20 mx-4 py-4 border-b border-gray-200">
                <h1
                    className={`text-primarycolor text-lg font-medium cursor-pointer 
                    ${show === "profile" ? "border-b-2 border-primarycolor" : ""}`}
                    onClick={() => setShow("profile")}
                >
                    Edit Profile
                </h1>
                <h1
                    className={`text-primarycolor text-lg font-medium cursor-pointer 
                    ${show === "security" ? "border-b-2 border-primarycolor" : ""}`}
                    onClick={() => setShow("security")}
                >
                    Security
                </h1>
                <h1
                    className={`text-primarycolor text-lg font-medium cursor-pointer 
                    ${show === "moderator" ? "border-b-2 border-primarycolor" : ""}`}
                    onClick={() => setShow("moderator")}
                >
                    Moderator Logins
                </h1>
            </div>
            <div className="px-4 py-6">
                {show === "profile" && <Form />}
                {show === "security" && <Security />}
                {show === "moderator" && <Moderator />}
            </div>
        </div>
    );
}

export default SettingsPage;
