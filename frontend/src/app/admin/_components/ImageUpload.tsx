"use client";

import { useRef, useState } from "react";
import { Image, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import clsx from "clsx";

export const ImageUpload = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    setFile(file);
  };

  return (
    <div className="flex flex-col gap-3">
      <Label className="text-sm font-medium">Food image</Label>

      <div
        className={clsx(
          "relative h-[138px] w-full rounded-lg border border-dashed flex items-center justify-center transition",
          isDragging
            ? "border-blue-500 bg-blue-50"
            : "border-muted bg-[#2563EB0D]"
        )}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          const droppedFile = e.dataTransfer.files?.[0];
          if (droppedFile) handleFile(droppedFile);
        }}
      >
        {/* 🔹 Hidden file input */}
        <Input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const selectedFile = e.target.files?.[0];
            if (selectedFile) handleFile(selectedFile);
          }}
        />

        {/* 📸 PREVIEW */}
        {file ? (
          <div className="relative w-full h-full">
            <img
              src={URL.createObjectURL(file)}
              alt="preview"
              className="w-full h-full object-cover rounded-lg"
            />

            {/* ❌ REMOVE */}
            <button
              type="button"
              onClick={() => setFile(null)}
              className="absolute top-2 right-2 w-7 h-7 bg-black/60 rounded-full flex items-center justify-center hover:bg-black"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        ) : (
          /* EMPTY STATE */
          <div className="flex flex-col items-center gap-2">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:scale-105 transition"
            >
              <Image className="w-4 h-4 text-blue-600" />
            </button>
            <p className="text-sm font-medium text-[#18181B]">
              Choose a file or drag & drop it here
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
