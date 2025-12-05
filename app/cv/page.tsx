// app/cv/page.tsx
import CVFormation from "@/components/section/CVFormation";
import CVExperience from "@/components/section/CVExperience";
import CVAutre from "@/components/section/CVAutre";
import CVDownload from "@/components/CVDownload";
import Footer from "@/components/section/Footer";
import BackToTop from "@/components/BackToTop";

export default function CVPage() {
  return (
    <>
        <div className="relative bg-black text-white pl-24 pr-12 py-12">
            <h2 className="text-4xl font-bold mb-12">Curriculum Vitae</h2>
        </div>
        <CVDownload/>
        <CVFormation/>
        <CVExperience/>
        <CVAutre/>
        <BackToTop/>
        <Footer/>
    </>
  )
}