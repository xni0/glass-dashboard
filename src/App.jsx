import Navbar from './components/layout/Navbar';
import UserCard from './components/features/UserCard';
import LoginForm from './components/features/LoginForm';
import Button from './components/ui/Button';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden font-sans text-white">
      
      
      <div className="fixed inset-0 -z-10">
        <img 
          src="/fondo.jpg" 
          alt="Fondo decorativo" 
          className="w-full h-full object-cover" 
        />
      </div>

      <Navbar />

      <main className="container mx-auto px-4 pt-32 pb-12 flex flex-col items-center gap-20">
        
        <section className="w-full flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold text-white drop-shadow-md">Tarjeta Glass "Liquid"</h2>
          <UserCard />
        </section>

        <section className="w-full flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold text-white drop-shadow-md">Login</h2>
          <LoginForm />
        </section>

        <section className="w-full flex flex-col items-center gap-6">
<div className="
  flex flex-wrap gap-4 justify-center p-6 
  bg-bg-black-20
  
  backdrop-blur-xl 
  rounded-glass-lg
  border border-border-gray/30
  w-full max-w-md mx-auto mt-8 /* Ajustes de posición */
">
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="danger">Danger</Button>
</div>
</section>

      </main>
    </div>
  )
}

export default App