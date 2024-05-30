import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto mt-[200px] mx-4">
      <div className="bg-white w-90 mx-auto rounded-md p-6 shadow space-y-4 shadow-md border border-neutral-200">
        {/* Testimonial Card */}
        <section className="flex gap-4">
          {/* Header */}
          <figure aria-labelledby="avatar-label">
            <Image
              src="/img/profile-thumbnail.png"
              className="rounded-full"
              alt="User's Avatar"
              width={48}
              height={48}
            />
            <figcaption id="avatar-label" className="sr-only">User&apos;s Avatar</figcaption>
          </figure>
          {/* Title */}
          <div>
            <p className="text-lg font-semibold">Sarah Dole</p>
            {/* Handle */}
            <p className="text-sm text-neutral-600">@sarahdole</p>
          </div>
        </section>
        <div>
          {/* Body */}
          <p className="text-neutral-600 text-base line-clamp-6">I&apos;ve been searching for high-quality abstract images for my design projects, 
            and I&apos;m thrilled to have found this platform. The variety and depth of creativity 
            are astounding!
            </p>
        </div>
      </div>
    </main>
  );
}
