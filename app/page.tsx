import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden">
      <div className="flex justify-center mt-[200px] max-w-[340px]">
        {/* Testimonial Card */}
        <div>
          {/* Header */}
          <Image
            src="/img/profile-thumbnail.png"
            className="rounded-full"
            alt="User's Avatar"
            width={48}
            height={48}
          />
          {/* Title */}
          <p>Sarah Dole</p>
          {/* Handle */}
          <p>@sarahdole</p>
        </div>
        <div>
          {/* Body */}
          <p>I&apos;ve been searching for high-quality abstract images for my design projects, 
            and I&apos;m thrilled to have found this platform. The variety and depth of creativity 
            are astounding!</p>
        </div>
      </div>
    </main>
  );
}
