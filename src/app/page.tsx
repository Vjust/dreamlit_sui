import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
// import CommandPalette from "@/components/CommandPalette"
import { 
  HeroSection, 
  ServicesSection, 
  ProductsSection, 
  WhyDreamlitSection, 
  CTASection 
} from "@/components/sections"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      {/* <CommandPalette /> */}
      
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <ProductsSection />
        <WhyDreamlitSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  )
}