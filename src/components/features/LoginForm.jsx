import Button from '../ui/Button';

const LoginForm = () => {
  return (
    <form className="
      w-full max-w-md p-10
      flex flex-col gap-6
      bg-bg-black-20
      
      border border-border-gray/30
      backdrop-blur-glass
      rounded-glass-lg
      shadow-glass
    ">
      <h2 className="text-3xl font-bold text-text-white text-center drop-shadow-md tracking-wide">
        Acceso
      </h2>
      
      {/* Input Email */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-text-gray-300 ml-1">Email</label>
        <input 
          type="email" 
          placeholder="tu@email.com"
          className="w-full px-5 py-3 
          rounded-glass-sm
          /* Nota: Para inputs solemos usar un poco más oscuro (30), pero si quieres 20 cámbialo aquí */
          bg-bg-black-30 
          border border-border-gray/10
          text-text-white 
          placeholder-text-gray-300
          focus:outline-none focus:bg-bg-black-30 focus:border-border-gray/50 focus:ring-1 focus:ring-border-gray/50
          transition-all duration-300"
        />
      </div>
      
      {/* Input Contraseña */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-text-gray-300 ml-1">Password</label>
        <input 
          type="password" 
          placeholder="••••••"
          className="w-full px-5 py-3 
          rounded-glass-sm
          bg-bg-black-30 
          border border-border-gray/10
          text-text-white 
          placeholder-text-gray-300
          focus:outline-none focus:bg-bg-black-30 focus:border-border-gray/50 focus:ring-1 focus:ring-border-gray/50
          transition-all duration-300"
        />
      </div>

      {/* Mensaje de error */}
      <div className="p-3 rounded-lg flex items-center gap-3 bg-bg-red-500-default border border-bg-red-500-border">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        <p className="text-xs font-medium text-bg-red-500-font-red">
          Error: Credenciales Incorrectas
        </p>
      </div>

      <div className="pt-2">
        <Button variant="primary" className="w-full justify-center shadow-lg">
          Entrar
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;