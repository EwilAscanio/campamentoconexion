import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, Flame, Star, Target, Zap, CircleDot, Footprints, Brain, TableProperties, Coins } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const deportes = [
  {
    nombre: "Voleibol",
    descripcion: "Torneos emocionantes de voleibol en equipos mixtos. ¡Demuestra tu talento!",
    icon: Trophy,
    jugadores: "6 vs 6",
  },
  {
    nombre: "Fútbol",
    descripcion: "Partidos intensos de fútbol donde la pasión y el trabajo en equipo marcan la diferencia.",
    icon: Flame,
    jugadores: "7 vs 7",
  },
  {
    nombre: "Basketball",
    descripcion: "Competencias de basket llenas de adrenalina. ¡Anota y lleva a tu equipo a la victoria!",
    icon: Star,
    jugadores: "3 vs 3",
  },
  {
    nombre: "Beisbol Five",
    descripcion: "La nueva modalidad urbana del béisbol. Sin bate, sin guante, ¡solo tus manos!",
    icon: CircleDot,
    jugadores: "5 vs 5",
  },
  {
    nombre: "Kikimbol",
    descripcion: "El clásico juego de patear la pelota con toda la emoción de un partido de béisbol.",
    icon: Footprints,
    jugadores: "Equipos",
  },
  {
    nombre: "Ajedrez",
    descripcion: "Desafía tu mente en partidas estratégicas. Activa tu estrategia.",
    icon: Brain,
    jugadores: "1 vs 1",
  },
  {
    nombre: "Ping Pong",
    descripcion: "Torneos rápidos y emocionantes de tenis de mesa. ¡Reflejos y precisión al máximo!",
    icon: TableProperties,
    jugadores: "1 vs 1",
  },
  {
    nombre: "Domino",
    descripcion: "El clásico juego de fichas donde la estrategia y el cálculo mental son clave para ganar.",
    icon: Coins,
    jugadores: "2 vs 2",
  },
];

const recreativos = [
  {
    nombre: "Carreras de Relevos",
    descripcion: "Pruebas de velocidad y coordinación en equipo con obstáculos divertidos.",
    icon: Zap,
  },
  {
    nombre: "Búsqueda del Tesoro",
    descripcion: "Aventura por todo el campamento resolviendo pistas y acertijos bíblicos.",
    icon: Target,
  },
  {
    nombre: "Juegos de Integración",
    descripcion: "Dinámicas grupales diseñadas para conectar, reír y crear lazos inolvidables.",
    icon: Users,
  },
];

const equiposPuntuacion = [
  { nombre: "Equipo 1", dia1: 0, dia2: 0, dia3: 0, dia4: 0, total: 0 },
  { nombre: "Equipo 2", dia1: 0, dia2: 0, dia3: 0, dia4: 0, total: 0 },
  { nombre: "Equipo 3", dia1: 0, dia2: 0, dia3: 0, dia4: 0, total: 0 },
  { nombre: "Equipo 4", dia1: 0, dia2: 0, dia3: 0, dia4: 0, total: 0 },
];

const Games = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="container mx-auto px-4 text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Actividades & Deportes</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black graffiti-text text-gradient mb-4">
            JUEGOS
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Prepárate para vivir la competencia sana, la diversión y el compañerismo. 
            ¡Ven listo para darlo todo!
          </p>
        </section>

        {/* Deportes */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
            🏆 Deportes
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Competencias deportivas entre equipos del campamento
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {deportes.map((deporte) => (
              <Card
                key={deporte.nombre}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <deporte.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{deporte.nombre}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <p className="text-muted-foreground text-sm">{deporte.descripcion}</p>
                  <span className="inline-block bg-accent/10 text-accent border border-accent/30 text-xs font-bold px-3 py-1 rounded-full">
                    {deporte.jugadores}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recreativos */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
            🎉 Juegos Recreativos
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Actividades llenas de risas, retos y momentos inolvidables
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {recreativos.map((juego) => (
              <Card
                key={juego.nombre}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <juego.icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{juego.nombre}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm">{juego.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Puntuaciones */}
        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-6">
                <Coins className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Sistema de Monedas</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                🪙 Puntuaciones - Juegos Recreativos
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Cada día los equipos ganan monedas al participar y ganar en los juegos recreativos. 
                ¡El equipo con más monedas al final será el campeón!
              </p>
            </div>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border/50 bg-primary/5">
                      <TableHead className="text-foreground font-bold">Equipo</TableHead>
                      <TableHead className="text-center text-foreground font-bold">Día 1 🪙</TableHead>
                      <TableHead className="text-center text-foreground font-bold">Día 2 🪙</TableHead>
                      <TableHead className="text-center text-foreground font-bold">Día 3 🪙</TableHead>
                      <TableHead className="text-center text-foreground font-bold">Día 4 🪙</TableHead>
                      <TableHead className="text-center text-foreground font-bold ">Total 🪙</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {equiposPuntuacion.map((equipo, index) => (
                      <TableRow key={equipo.nombre} className="border-border/30 hover:bg-primary/5 transition-colors">
                        <TableCell className="font-semibold text-foreground">
                          <div className="flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-sm font-bold text-primary">
                              {index + 1}
                            </span>
                            {equipo.nombre}
                          </div>
                        </TableCell>
                        <TableCell className="text-center text-muted-foreground">{equipo.dia1}</TableCell>
                        <TableCell className="text-center text-muted-foreground">{equipo.dia2}</TableCell>
                        <TableCell className="text-center text-muted-foreground">{equipo.dia3}</TableCell>
                        <TableCell className="text-center text-muted-foreground">{equipo.dia4}</TableCell>
                        <TableCell className="text-center font-bold text-primary text-lg">{equipo.total}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <p className="text-xs text-muted-foreground text-center mt-4">
              * Las puntuaciones se actualizarán en vivo durante el campamento
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Games;
