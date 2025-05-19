"use client";

import { useEffect, useState } from "react";
import { UserProfile } from "@/types/user";
import clsx from "clsx";
import { IoChevronDownSharp } from "react-icons/io5";
import { toast } from "react-hot-toast";
import { useAppDispatch } from "@/app/store/hook";
import { updateProfile } from "@/app/store/profileSlice";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: () => void;
  profile: UserProfile;
};

export default function EditProfileModal({
  isOpen,
  onClose,
  onUpdate,
  profile,
}: Props) {
  const [form, setForm] = useState(profile);
  const dispatch = useAppDispatch();

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[8][0-9]{7,13}$/;
    const cleanedPhone = form.phone_number?.replace(/^(\+62|62)/, "") || "";

    if (!form.first_name.trim()) {
      toast.error("First name is required");
      return false;
    }

    if (!form.email_address.trim() || !emailRegex.test(form.email_address)) {
      toast.error("A valid email is required");
      return false;
    }

    if (!form.role) {
      toast.error("Role must be selected");
      return false;
    }

    if (!phoneRegex.test(cleanedPhone)) {
      toast.error("Phone number must start with 8 and be 8–14 digits");
      return false;
    }

    return true;
  };

  useEffect(() => {
    setForm(profile);
  }, [profile]);

  const handleChange = (field: keyof UserProfile, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const cleanedPhone = form.phone_number?.replace(/^(\+62|62)/, "") || "";
    const fullPhone = `+62${cleanedPhone}`;

    if (!validateForm()) return;

    const toastId = toast.loading("Updating profile...");

    const result = await dispatch(
      updateProfile({ ...form, phone_number: fullPhone })
    );
    
    if (updateProfile.fulfilled.match(result)) {
      toast.success("Profile updated successfully!", { id: toastId });
      onUpdate();
      onClose();
    } else {
      const message =
        typeof result.payload === "string"
          ? result.payload
          : "Failed to update profile";
      toast.error(message, { id: toastId });
    }
  };

  return (
    <div
      className={clsx(
        "fixed inset-0 z-[99999] flex items-center justify-center p-5 transition-opacity",
        isOpen ? "visible" : "invisible opacity-0 pointer-events-none"
      )}
    >
      <div
        className="fixed inset-0 bg-gray-400/50 backdrop-blur-[32px]"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
        >
          ✕
        </button>

        <div className="pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Edit Personal Information
          </h4>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            Update your details to keep your profile up-to-date.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                First Name
              </label>
              <input
                type="text"
                value={form.first_name}
                onChange={(e) => handleChange("first_name", e.target.value)}
                className="h-11 w-full rounded-lg border bg-transparent px-4 text-sm text-gray-800 shadow-theme-xs dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                Last Name
              </label>
              <input
                type="text"
                value={form.last_name || ""}
                onChange={(e) => handleChange("last_name", e.target.value)}
                className="h-11 w-full rounded-lg border bg-transparent px-4 text-sm text-gray-800 shadow-theme-xs dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                placeholder="Enter your last name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                Email
              </label>
              <input
                type="email"
                value={form.email_address}
                onChange={(e) => handleChange("email_address", e.target.value)}
                className="h-11 w-full rounded-lg border bg-transparent px-4 text-sm text-gray-800 shadow-theme-xs dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                Role
              </label>
              <div className="relative">
                <select
                  value={form.role}
                  onChange={(e) => handleChange("role", e.target.value)}
                  className="h-11 w-full appearance-none rounded-lg border bg-transparent px-4 pr-10 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                >
                  <option value="member">Member</option>
                  <option value="admin">Admin</option>
                </select>

                <span className="pointer-events-none absolute font-bold right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                  <IoChevronDownSharp size={16} />
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                Gender
              </label>
              <div className="relative">
                <select
                  value={form.gender || ""}
                  onChange={(e) => handleChange("gender", e.target.value)}
                  className="h-11 w-full appearance-none rounded-lg border bg-transparent px-4 pr-10 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                >
                  <option value="" disabled>
                    None
                  </option>
                  <option value="Laki_Laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>

                <span className="pointer-events-none absolute font-bold right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                  <IoChevronDownSharp size={16} />
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                Phone
              </label>
              <div className="relative flex h-11 w-full overflow-hidden rounded-lg border bg-white dark:border-gray-700 dark:bg-gray-900">
                <span className="flex items-center px-3 text-sm border-r dark:border-gray-700">
                  +62
                </span>
                <input
                  type="tel"
                  value={form.phone_number?.replace(/^(\+62|62)/, "") || ""}
                  onChange={(e) =>
                    handleChange("phone_number", `+62${e.target.value}`)
                  }
                  placeholder="xxxxxxxxxxx"
                  className="flex-1 appearance-none border-none bg-transparent px-2 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none dark:text-white/90 dark:placeholder:text-white/30"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                Profession
              </label>
              <div className="relative">
                <select
                  value={form.profession || ""}
                  onChange={(e) => handleChange("profession", e.target.value)}
                  className="h-11 w-full appearance-none rounded-lg border bg-transparent px-4 pr-10 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                >
                  <option value="" disabled>
                    None
                  </option>
                  <option value="Pelajar/Mahasiswa">Pelajar/Mahasiswa</option>
                  <option value="Event Organizer">Event Organizer</option>
                  <option value="Wedding Organizer">Wedding Organizer</option>
                  <option value="IT Staff">IT Staff</option>
                  <option value="Admin">Admin</option>
                  <option value="Lainnya">Lainnya</option>
                </select>

                <span className="pointer-events-none absolute font-bold right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                  <IoChevronDownSharp size={16} />
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                Knowing Layaran From
              </label>
              <div className="relative">
                <select
                  value={form.knowing_from || ""}
                  onChange={(e) => handleChange("knowing_from", e.target.value)}
                  className="h-11 w-full appearance-none rounded-lg border bg-transparent px-4 pr-10 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                >
                  <option value="" disabled>
                    None
                  </option>
                  <option value="Search Google">Search Google</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Rekomendasi Teman">Rekomendasi Teman</option>
                  <option value="Website Layaran">Website Layaran</option>
                </select>

                <span className="pointer-events-none absolute font-bold right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                  <IoChevronDownSharp size={16} />
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03]"
            >
              Close
            </button>
            <button
              type="submit"
              className="rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
