import ButtonLoadMore from '@/components/ButtonLoadMore';
import Hero from '@/components/Hero';
import NewProducts from '@/components/NewProducts';
import Testimonials from '@/components/Testimonials';
export default function Home() {
  return (
    <main>
      <Hero />
      <NewProducts/>
      <ButtonLoadMore/>
      <Testimonials/>
    </main>
  );
}
