import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Toggle } from "@/components/ui/toggle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Bold, Italic, Underline, Info, AlertCircle, CheckCircle } from "lucide-react";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-6">
    <div>
      <h4 className="mb-2">{title}</h4>
      <Separator />
    </div>
    {children}
  </div>
);

const ColorSwatch = ({ name, variable, className }: { name: string; variable: string; className: string }) => (
  <div className="flex items-center gap-3">
    <div className={`w-12 h-12 rounded-lg border border-border ${className}`} />
    <div>
      <p className="!text-sm !mb-0 font-sans font-medium text-foreground">{name}</p>
      <p className="!text-xs !mb-0 font-sans text-muted-foreground">{variable}</p>
    </div>
  </div>
);

const DesignSystem = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-5xl space-y-20">
          {/* Header */}
          <div>
            <h1 className="mb-4">Flutter Design System</h1>
            <p className="max-w-2xl">
              Apple Glass-inspired design system built on the Flutter brand palette — teal, navy, sage, and light green —
              with translucent materials, soft navy-tinted shadows, and a 1rem base radius.
            </p>
          </div>

          {/* Flutter Brand Palette */}
          <Section title="Flutter Brand Palette">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <ColorSwatch name="Navy" variable="#083158" className="bg-[hsl(var(--flutter-navy))]" />
              <ColorSwatch name="Dark Teal" variable="#0A6C87" className="bg-[hsl(var(--flutter-dark-teal))]" />
              <ColorSwatch name="Teal" variable="#459C96" className="bg-[hsl(var(--flutter-teal))]" />
              <ColorSwatch name="Sage" variable="#92CCA4" className="bg-[hsl(var(--flutter-sage))]" />
              <ColorSwatch name="Light Green" variable="#C9F0B1" className="bg-[hsl(var(--flutter-light-green))]" />
            </div>
          </Section>

          {/* Semantic Tokens */}
          <Section title="Semantic Tokens">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <ColorSwatch name="Background" variable="--background" className="bg-background" />
              <ColorSwatch name="Foreground" variable="--foreground" className="bg-foreground" />
              <ColorSwatch name="Primary" variable="--primary" className="bg-primary" />
              <ColorSwatch name="Secondary" variable="--secondary" className="bg-secondary" />
              <ColorSwatch name="Muted" variable="--muted" className="bg-muted" />
              <ColorSwatch name="Accent" variable="--accent" className="bg-accent" />
              <ColorSwatch name="Destructive" variable="--destructive" className="bg-destructive" />
              <ColorSwatch name="Card" variable="--card" className="bg-card" />
              <ColorSwatch name="Border" variable="--border" className="bg-border" />
              <ColorSwatch name="Ring" variable="--ring" className="bg-ring" />
            </div>
          </Section>

          {/* Chart Palette */}
          <Section title="Chart Palette">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <ColorSwatch name="Chart 1" variable="--chart-1" className="bg-[hsl(var(--chart-1))]" />
              <ColorSwatch name="Chart 2" variable="--chart-2" className="bg-[hsl(var(--chart-2))]" />
              <ColorSwatch name="Chart 3" variable="--chart-3" className="bg-[hsl(var(--chart-3))]" />
              <ColorSwatch name="Chart 4" variable="--chart-4" className="bg-[hsl(var(--chart-4))]" />
              <ColorSwatch name="Chart 5" variable="--chart-5" className="bg-[hsl(var(--chart-5))]" />
            </div>
          </Section>

          {/* Gradients */}
          <Section title="Gradients">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="h-24 rounded-2xl bg-gradient-primary flex items-end p-3">
                <span className="text-xs font-sans text-primary-foreground">bg-gradient-primary</span>
              </div>
              <div className="h-24 rounded-2xl bg-gradient-dark flex items-end p-3">
                <span className="text-xs font-sans text-primary-foreground">bg-gradient-dark</span>
              </div>
              <div className="h-24 rounded-2xl bg-gradient-soft border border-border flex items-end p-3">
                <span className="text-xs font-sans text-muted-foreground">bg-gradient-soft</span>
              </div>
            </div>
          </Section>

          {/* Glass Materials */}
          <Section title="Glass Materials">
            <div
              className="relative rounded-3xl p-8 overflow-hidden"
              style={{ background: "var(--gradient-primary)" }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="backdrop-blur-md bg-white/60 border border-white/30 rounded-2xl p-4 shadow-glass-sm">
                  <p className="!text-sm !mb-1 font-sans font-medium text-foreground">Thin</p>
                  <p className="!text-xs !mb-0 font-sans text-muted-foreground">white/60 · blur-md</p>
                </div>
                <div className="backdrop-blur-lg bg-white/75 border border-white/30 rounded-2xl p-4 shadow-glass-md">
                  <p className="!text-sm !mb-1 font-sans font-medium text-foreground">Regular</p>
                  <p className="!text-xs !mb-0 font-sans text-muted-foreground">white/75 · blur-lg</p>
                </div>
                <div className="backdrop-blur-xl bg-white/85 border border-white/40 rounded-2xl p-4 shadow-glass-lg">
                  <p className="!text-sm !mb-1 font-sans font-medium text-foreground">Thick</p>
                  <p className="!text-xs !mb-0 font-sans text-muted-foreground">white/85 · blur-xl</p>
                </div>
                <div className="backdrop-blur-2xl bg-white/95 border border-white/50 rounded-2xl p-4 shadow-glass-xl">
                  <p className="!text-sm !mb-1 font-sans font-medium text-foreground">Ultra Thick</p>
                  <p className="!text-xs !mb-0 font-sans text-muted-foreground">white/95 · blur-2xl</p>
                </div>
              </div>
            </div>
          </Section>

          {/* Typography */}
          <Section title="Typography">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="!text-sm !mb-0 font-sans font-medium text-muted-foreground uppercase tracking-wider">
                  Sans — Inter
                </p>
                <h1>Heading 1 — The quick brown fox</h1>
                <h2>Heading 2 — The quick brown fox</h2>
                <h3>Heading 3 — The quick brown fox</h3>
                <h4>Heading 4 — The quick brown fox</h4>
                <h5>Heading 5 — The quick brown fox</h5>
                <h6>Heading 6 — The quick brown fox</h6>
              </div>
              <Separator />
              <div>
                <p className="!text-sm !mb-2 font-sans font-medium text-muted-foreground uppercase tracking-wider">
                  Serif — Nunito Sans
                </p>
                <p>
                  Body text uses Nunito Sans at text-lg/text-xl with relaxed leading. This is the default paragraph
                  style applied globally across all pages for comfortable reading.
                </p>
              </div>
            </div>
          </Section>

          {/* Buttons */}
          <Section title="Buttons">
            <div className="space-y-6">
              <div>
                <p className="!text-sm !mb-3 font-sans font-medium text-muted-foreground uppercase tracking-wider">
                  Variants
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </div>
              <div>
                <p className="!text-sm !mb-3 font-sans font-medium text-muted-foreground uppercase tracking-wider">
                  Sizes
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">
                    <Bold className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div>
                <p className="!text-sm !mb-3 font-sans font-medium text-muted-foreground uppercase tracking-wider">
                  States
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button>Enabled</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>
            </div>
          </Section>

          {/* Form Controls */}
          <Section title="Form Controls">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="input-default">Text Input</Label>
                  <Input id="input-default" placeholder="Enter text..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="input-disabled">Disabled Input</Label>
                  <Input id="input-disabled" placeholder="Disabled" disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="textarea-default">Textarea</Label>
                  <Textarea id="textarea-default" placeholder="Write something..." />
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Select</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="a">Option A</SelectItem>
                      <SelectItem value="b">Option B</SelectItem>
                      <SelectItem value="c">Option C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="check" />
                  <Label htmlFor="check">Checkbox label</Label>
                </div>
                <div className="flex items-center gap-3">
                  <Switch id="switch" />
                  <Label htmlFor="switch">Switch toggle</Label>
                </div>
                <div className="space-y-2">
                  <Label>Slider</Label>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
              </div>
            </div>
          </Section>

          {/* Cards */}
          <Section title="Cards">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description with supporting details.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="!mb-0">Card content goes here. This is the main body of the card component.</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Action</Button>
                </CardFooter>
              </Card>
              <Card className="bg-secondary text-secondary-foreground">
                <CardHeader>
                  <CardTitle className="text-secondary-foreground">Dark Card</CardTitle>
                  <CardDescription className="text-secondary-foreground/70">
                    A card using secondary colors.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="!mb-0 text-secondary-foreground/80">
                    Card content with inverted styling for contrast sections.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Section>

          {/* Badges */}
          <Section title="Badges">
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </Section>

          {/* Tabs */}
          <Section title="Tabs">
            <Tabs defaultValue="tab1" className="w-full">
              <TabsList>
                <TabsTrigger value="tab1">Overview</TabsTrigger>
                <TabsTrigger value="tab2">Details</TabsTrigger>
                <TabsTrigger value="tab3">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="mt-4">
                <p className="!mb-0">This is the overview tab content.</p>
              </TabsContent>
              <TabsContent value="tab2" className="mt-4">
                <p className="!mb-0">Details tab content goes here.</p>
              </TabsContent>
              <TabsContent value="tab3" className="mt-4">
                <p className="!mb-0">Settings and configuration options.</p>
              </TabsContent>
            </Tabs>
          </Section>

          {/* Toggle */}
          <Section title="Toggle">
            <div className="flex gap-2">
              <Toggle aria-label="Bold">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle aria-label="Italic">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle aria-label="Underline">
                <Underline className="h-4 w-4" />
              </Toggle>
            </div>
          </Section>

          {/* Accordion */}
          <Section title="Accordion">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is this design system?</AccordionTrigger>
                <AccordionContent>
                  A living reference of all UI components, tokens, and patterns used across this portfolio project.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What technologies are used?</AccordionTrigger>
                <AccordionContent>
                  Built with React, TypeScript, Tailwind CSS, and shadcn/ui components.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I customize the tokens?</AccordionTrigger>
                <AccordionContent>
                  Yes — all design tokens are defined in index.css and tailwind.config.ts for easy customization.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Section>

          {/* Progress */}
          <Section title="Progress">
            <div className="space-y-4 max-w-md">
              <div className="space-y-2">
                <p className="!text-sm !mb-0 font-sans text-muted-foreground">25%</p>
                <Progress value={25} />
              </div>
              <div className="space-y-2">
                <p className="!text-sm !mb-0 font-sans text-muted-foreground">50%</p>
                <Progress value={50} />
              </div>
              <div className="space-y-2">
                <p className="!text-sm !mb-0 font-sans text-muted-foreground">75%</p>
                <Progress value={75} />
              </div>
            </div>
          </Section>

          {/* Avatars */}
          <Section title="Avatars">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                <AvatarFallback>MH</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>MH</AvatarFallback>
              </Avatar>
              <Avatar className="h-16 w-16">
                <AvatarFallback className="text-lg">MH</AvatarFallback>
              </Avatar>
            </div>
          </Section>

          {/* Alerts */}
          <Section title="Alerts">
            <div className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>This is an informational alert with default styling.</AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Something went wrong. Please try again.</AlertDescription>
              </Alert>
            </div>
          </Section>

          {/* Tooltip */}
          <Section title="Tooltip">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="!mb-0 !text-sm">This is a tooltip</p>
              </TooltipContent>
            </Tooltip>
          </Section>

          {/* Spacing & Shadows */}
          <Section title="Spacing & Shadows">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="!text-sm !mb-2 font-sans font-medium text-muted-foreground uppercase tracking-wider">
                  Border Radius
                </p>
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-primary/20 border border-border rounded-sm flex items-center justify-center">
                    <span className="text-xs font-sans text-muted-foreground">sm</span>
                  </div>
                  <div className="w-16 h-16 bg-primary/20 border border-border rounded-md flex items-center justify-center">
                    <span className="text-xs font-sans text-muted-foreground">md</span>
                  </div>
                  <div className="w-16 h-16 bg-primary/20 border border-border rounded-lg flex items-center justify-center">
                    <span className="text-xs font-sans text-muted-foreground">lg</span>
                  </div>
                  <div className="w-16 h-16 bg-primary/20 border border-border rounded-full flex items-center justify-center">
                    <span className="text-xs font-sans text-muted-foreground">full</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="!text-sm !mb-2 font-sans font-medium text-muted-foreground uppercase tracking-wider">
                  Shadows
                </p>
                <div className="flex gap-6">
                  <div className="w-20 h-20 bg-card rounded-lg shadow-card flex items-center justify-center">
                    <span className="text-xs font-sans text-muted-foreground">card</span>
                  </div>
                  <div className="w-20 h-20 bg-card rounded-lg shadow-elegant flex items-center justify-center">
                    <span className="text-xs font-sans text-muted-foreground">elegant</span>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DesignSystem;
