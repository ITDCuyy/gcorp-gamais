import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { HydrateClient } from "~/trpc/server";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default async function HomePage() {
  return (
    <HydrateClient>
      <main className="bg-background text-foreground">
        {/* Hero Section */}
        <section className="flex h-[80vh] flex-col items-center justify-center bg-gradient-to-b from-primary/10 to-transparent text-center">
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
            G-Corp ITB
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Gamais Corporation, Menyediakan solusi dan produk terbaik, termasuk
            Bundle Soal Gamais (BSG) untuk mahasiswa ITB.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild>
              <Link href="/products/bsg">Lihat BSG</Link>
            </Button>
            <Button variant="outline">Bergabung</Button>
          </div>
        </section>

        {/* Latest BSG Edition Section */}
        <section className="px-4 py-16 md:px-20">
          <h2 className="mb-8 text-center text-3xl font-bold">
            BSG Edisi Terbaru
          </h2>
          <div className="mx-auto max-w-4xl">
            <Card className="overflow-hidden md:flex">
              <div className="relative h-64 md:h-auto md:w-1/2">
                {/* Placeholder image for BSG - replace with an actual BSG cover */}
                <img
                  src="https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?q=80&w=2124&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Book Cover"
                  layout="fill"
                  className="h-full w-full object-cover" // Changed objectFit to cover
                />
              </div>
              <div className="p-8 md:w-1/2">
                <h3 className="text-2xl font-bold">
                  Bundle Soal Gamais (BSG) Edisi 2025
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Edisi terbaru Bundle Soal Gamais untuk membantu mahasiswa TPB
                  ITB mempersiapkan diri menghadapi ujian Fisika Dasar,
                  Matematika, dan Kimia. Dilengkapi dengan pembahasan lengkap
                  dan video pendukung.
                </p>
                <p className="mt-4">
                  Tersedia dalam bentuk cetak. Preorder sekarang untuk edisi
                  terbatas!
                </p>
                <Button className="mt-6" asChild>
                  <Link href="/products/bsg">Lihat Detail BSG</Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Posts & Blogs Section */}
        <section className="bg-muted/40 px-4 py-16 md:px-20">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Kabar & Artikel Terbaru
          </h2>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder for posts - content would be G-Corp related news/articles */}
            {[1, 2, 3].map((post) => (
              <Card key={post}>
                <CardHeader>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&text=Post+${post}`}
                      alt={`Post ${post}`}
                      object-fit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <CardTitle className="pt-4">
                    Produk Terkini dari G-Corp {post}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ringkasan singkat dari artikel atau kabar terbaru G-Corp
                    yang menarik perhatian dan memberikan informasi relevan
                    kepada pembaca.
                  </p>
                  <Button variant="link" className="mt-4 p-0" asChild>
                    <Link href={`/posts/${post}`}>Baca Selengkapnya</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* About Us Section */}
        <section className="px-4 py-16 md:px-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Tentang G-Corp ITB</h2>
            <p className="text-muted-foreground">
              G-Corp ITB (Gamais Corporation ITB) adalah sebuah inisiatif yang
              berkomitmen untuk mengembangkan solusi inovatif dan menyediakan
              sumber daya berkualitas bagi mahasiswa ITB. Kami berfokus pada
              kolaborasi, pengembangan produk, dan peningkatan kualitas
              pendidikan melalui berbagai program, salah satunya adalah Bundle
              Soal Gamais (BSG).
            </p>
            <Button className="mt-6" variant="outline" asChild>
              <Link href="/about">Pelajari Lebih Lanjut</Link>
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-muted/40 px-4 py-16 md:px-20">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="mx-auto max-w-2xl">
            <AccordionItem value="item-1 ">
              <AccordionTrigger>Apa itu G-Corp ITB?</AccordionTrigger>
              <AccordionContent>
                G-Corp ITB adalah entitas yang fokus pada pengembangan inovasi
                dan penyediaan sumber daya, termasuk produk pendidikan seperti
                BSG, untuk mendukung mahasiswa di ITB.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Apa itu Bundle Soal Gamais (BSG)?
              </AccordionTrigger>
              <AccordionContent>
                Bundle Soal Gamais (BSG) adalah produk unggulan G-Corp ITB yang
                berisi kumpulan soal-soal latihan dan pembahasan lengkap untuk
                mata kuliah dasar di ITB (Fisika, Matematika, Kimia), dirancang
                khusus untuk mahasiswa TPB.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Bagaimana cara mendapatkan Bundle Soal Gamais (BSG)?
              </AccordionTrigger>
              <AccordionContent>
                BSG dapat dipesan melalui platform daring kami atau saat periode
                penjualan khusus yang akan diumumkan melalui media sosial G-Corp
                ITB.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Bagaimana cara bergabung dengan G-Corp ITB?
              </AccordionTrigger>
              <AccordionContent>
                Informasi mengenai kesempatan bergabung atau kolaborasi dengan
                G-Corp ITB akan diumumkan melalui kanal media sosial resmi kami
                dan website. Tetap pantau untuk informasi terbaru!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Footer */}
        <footer className="border-t bg-background">
          <div className="mx-auto max-w-6xl px-4 py-8 md:px-20">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold">G-Corp ITB</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Sebuah tim gacor.
                  <br />
                  Masjid Salman ITB, Jl. Ganesa No.7, Lb. Siliwangi, Kecamatan
                  Coblong, Kota Bandung, Jawa Barat 40132
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Tautan</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>
                    <Link
                      href="/about"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Tentang
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/bsg"
                      className="text-muted-foreground hover:text-primary"
                    >
                      BSG
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Kontak
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Media Sosial</h3>
                <div className="mt-2 flex space-x-4">
                  {/* Replace with actual G-Corp social media links */}
                  <Link
                    href="https://www.instagram.com/gamaiscorporation/"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#" // Example Twitter for Gamais
                    className="text-muted-foreground transition-colors hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#" // Example LinkedIn for Gamais
                    className="text-muted-foreground transition-colors hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} G-Corp ITB. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </HydrateClient>
  );
}
