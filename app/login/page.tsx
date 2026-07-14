import Image from "next/image";
import LoginForm from "@/components/login-form";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <Image
        src="/images/students.jpg"
        alt="Kali Devi Secondary School"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Decorative Blur */}
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-between px-6 py-10">
        {/* Left Side */}
        <div className="hidden max-w-xl text-white lg:block">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur">
            Government of Nepal
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight">
            Kali Devi
            <br />
            Secondary School
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/90">
            Welcome to the School Management System. This portal allows
            administrators to manage notices, academic information,
            teachers, students, and other school activities securely.
          </p>

          <div className="mt-10 flex gap-10">
            <div>
              <h2 className="text-3xl font-bold">800+</h2>
              <p className="text-white/80">Students</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">40+</h2>
              <p className="text-white/80">Teachers & Staff</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">2060 BS</h2>
              <p className="text-white/80">Established</p>
            </div>
          </div>
        </div>

        {/* Login */}
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-0 right-0 z-10 text-center text-sm text-white/80">
        © {new Date().getFullYear()} Kali Devi Secondary School • Government of Nepal
      </div>
    </main>
  );
}