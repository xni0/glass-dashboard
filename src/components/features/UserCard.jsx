import Button from '../ui/Button';

const UserCard = () => {
  return (
    <div className="
      group relative
      w-full max-w-2xl
      p-8
      
      backdrop-blur-xl 
      
      bg-bg-black-20
      
      border border-border-gray/30
      
      shadow-2xl
      rounded-glass-lg
      flex flex-col md:flex-row items-center gap-8
      transition-all duration-300 hover:scale-[1.02]
    ">
      
      
      <div className="relative shrink-0">
        <img 
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" 
          alt="Jane Doe" 
          className="w-28 h-28 rounded-full border-2 border-border-gray/50 shadow-lg object-cover"
        />
      </div>

      <div className="flex-1 text-center md:text-left space-y-3">
        <h3 className="text-3xl font-bold text-text-white drop-shadow-sm">Jane Doe</h3>
        <p className="text-purple-200 font-medium tracking-wide">jane@design.com</p>
        <p className="text-text-gray-300 text-sm leading-relaxed">
          Diseñadora UX - UI
        </p>
      </div>

      <div className="shrink-0">
         <Button variant="secondary">Contactar</Button>
      </div>
    </div>
  );
};

export default UserCard;