"use client"; // Pastikan ada ini karena kita menggunakan interaksi client-side

export default function Navbar() {
  const menus = [
    { name: "About Me", id: "about" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Xperience", id: "pengalaman" }, // Disingkat agar lebih rapi di UI
    { name: "Certificate", id: "sertifikat" },
    { name: "Tech Stack", id: "tech" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); 

    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80; // Sesuaikan dengan tinggi navbarmu
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
     <nav className="fixed top-0 w-full bg-[var(--cream)] backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-center gap-20 py-6">
        {menus.map((menu, i) => (
          <a
            key={i}
            href={`#${menu.id}`}
            onClick={(e) => handleScroll(e, menu.id)}
            className="px-6 py-2 rounded-full border border-black text-sm tracking-tight hover:bg-black hover:text-white transition-all duration-300"
          >
            {menu.name}
          </a>
        ))}
      </div>
    </nav>
  );
} 
