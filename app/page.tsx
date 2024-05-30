import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-90 overflow-hidden mx-auto px-4 mt-[200px]">
      <div className="bg-white rounded-md p-6 shadow space-y-4 shadow-md border border-neutral-200">
        {/* Testimonial Card */}
        <div className="flex gap-4">
          {/* Header */}
          <Image
            src="/img/profile-thumbnail.png"
            className="rounded-full"
            alt="User's Avatar"
            width={48}
            height={48}
          />
          {/* Title */}
          <div>
            <p className="text-lg font-semibold">Sarah Dole</p>
            {/* Handle */}
            <p className="text-sm text-neutral-500">@sarahdole</p>
          </div>
        </div>
        <div>
          {/* Body */}
          <p className="text-neutral-600 text-base">I&apos;ve been searching for high-quality abstract images for my design projects, 
            and I&apos;m thrilled to have found this platform. The variety and depth of creativity 
            are astounding!</p>
        </div>
      </div>
    </main>
  );
}
