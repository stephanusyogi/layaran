"use client";

import React, { useEffect, useState } from "react";
import Breadcrumbs from "@/components/dashboard/Breadcrumbs";
import { useSessionContext } from "@/app/context/SessionContext";
import Image from "next/image";
import EditProfileModal from "@/components/dashboard/EditProfileModal";
import { fetchProfile } from "@/app/store/profileSlice";
import { UserProfile } from "@/types/user";
import { useAppDispatch, useAppSelector } from "@/app/store/hook";

function capitalizeWords(name: string) {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export default function MyProfile() {
  const dispatch = useAppDispatch();
  const { user } = useSessionContext() || {};

  const profile = useAppSelector((state) => state.profile.data);
  const error = useAppSelector((state) => state.profile.error);
  const loading = useAppSelector((state) => state.profile.loading);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (user?.user_id) {
      dispatch(fetchProfile());
    }
  }, [user?.user_id, dispatch]);

  if (error) {
    return (
      <div className="p-4 md:p-6">
        <div className="rounded-xl border border-error-500 bg-error-50 p-4 dark:border-error-500/30 dark:bg-error-500/15">
          <h4 className="mb-1 text-sm font-semibold text-gray-800 dark:text-white/90">
            Error
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{error}</p>
        </div>
      </div>
    );
  }

  if (loading || !profile) {
    return (
      <div className="p-4 mx-auto max-w-screen-2xl md:p-6 animate-pulse">
        {/* Skeleton UI same as before */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
          <div className="p-5 border rounded-2xl dark:border-gray-800">
            {/* Loading state skeleton */}
            <div className="h-8 w-32 bg-gray-300 rounded dark:bg-gray-600 mb-4" />
            <div className="h-6 w-24 bg-gray-300 rounded dark:bg-gray-600 mb-2" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 mx-auto max-w-screen-2xl md:p-6">
      <Breadcrumbs pageName="Profile" />

      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <div className="p-5 mb-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
          <div className="flex flex-col gap-5 items-center xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
              <div className="w-20 h-20 overflow-hidden border border-gray-200 rounded-full dark:border-gray-800">
                <Image
                  src={profile.image || "/images/logo-user.png"}
                  alt="user"
                  width={80}
                  height={80}
                />
              </div>
              <div className="order-3 xl:order-2 text-center xl:text-left">
                <h4 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white/90">
                  {profile.first_name || profile.last_name
                    ? `${capitalizeWords(
                        profile.first_name || ""
                      )} ${capitalizeWords(profile.last_name || "")}`.trim()
                    : "User"}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {profile.role === "admin" ? "Administrator" : "User"}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex h-8 w-20 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
            >
              Edit
            </button>
          </div>

          <div className="py-5 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
            <InfoRow label="First Name" value={profile.first_name} />
            <InfoRow label="Last Name" value={profile.last_name} />
            <InfoRow label="Email address" value={profile.email_address} />
            <InfoRow label="Phone Number" value={profile.phone_number} />
            <InfoRow label="Profession" value={profile.profession} />
            <InfoRow label="Gender" value={profile.gender} />
            <InfoRow
              label="Knowing Layaran From"
              value={profile.knowing_from}
            />
          </div>
        </div>
      </div>

      <EditProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpdate={() => dispatch(fetchProfile())}
        profile={profile}
      />
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value?: string | null }) {
  return (
    <div>
      <p className="mb-2 text-xs text-gray-500 dark:text-gray-400">{label}</p>
      <p className="text-sm font-medium text-gray-800 dark:text-white/90">
        {value ? capitalizeWords(value) : "-"}
      </p>
    </div>
  );
}
