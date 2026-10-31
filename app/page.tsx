'use client'

import { useMemo, useState } from 'react'
import { Check, ChevronDown, Leaf, RotateCcw, Search, Sparkles, TrendingUp } from 'lucide-react'

const products = [
  ['Immucaps', 'Defensas', 'Inmunidad y defensas', 'sage'],
  ['Neiroflex', 'Articulaciones', 'Articulaciones y movilidad', 'blue'],
  ['Artronol', 'Articulaciones', 'Glucosamina, condroitina y MSM', 'blue'],
  ['Omegazol', 'Cardiovascular', 'Omega-3 y apoyo antiinflamatorio', 'gold'],
  ['Hypotenol', 'Circulación', 'Fórmula vegetal líquida', 'sky'],
  ['Calmformule', 'Relajación / Sueño', 'Estrés y descanso', 'lavender'],
  ['Diabexol Pro', 'Metabolismo / Azúcar', 'Control de azúcar', 'rose'],
  ['Formaksil', 'Energía / Metabolismo', 'Energía y metabolismo', 'teal'],
  ['HypoNorm', 'Circulación', 'Circulación y presión', 'sky'],
  ['Vigoraten', 'Salud masculina', 'Vitalidad masculina', 'orange'],
  ['Masculanix', 'Salud masculina', 'Próstata y hombre adulto', 'indigo'],
  ['Feminavital', 'Salud femenina', 'Equilibrio hormonal', 'pink'],
  ['Qeep Young & Beauty', 'Belleza / Antioxidante', 'Belleza y antienvejecimiento', 'peach'],
  ['Qeep Clean', 'Depuración', 'Depuración y detox', 'mint'],
  ['Toxofil', 'Depuración / Antiparasitario', 'Limpieza profunda', 'lime'],
  ['Adenofrin', 'Salud masculina', 'Nutrición masculina avanzada', 'amber'],
  ['ErectaPlus', 'Salud masculina', 'Complemento alimenticio masculino', 'amber'],
  ['Cellufol', 'Cuidado corporal', 'Gel corporal para zonas problemáticas', 'plum'],
  ['Damian X', 'Productos especializados', 'Cuidado externo íntimo', 'plum'],
] as const

const symptoms = ['Dolor articular / Rigidez', 'Estrés / Ansiedad', 'Problemas de sueño', 'Cansancio / Fatiga', 'Defensas bajas / Resfriados frecuentes', 'Retención de líquidos', 'Problemas digestivos', 'Falta de concentración', 'Presión arterial elevada', 'Azúcar en sangre alto', 'Menopausia / Sofocos', 'Salud de la próstata', 'Vitalidad masculina', 'Piel / Cabello / Uñas débiles', 'Sobrepeso / Metabolismo lento', 'Inflamación general', 'Quiero desintoxicarme', 'Envejecimiento / Antioxidantes']

const recommendations = [
  { name: 'Omegazol', category: 'Omega-3', reason: 'Complementa el cuidado articular y aporta apoyo cardiovascular.', phrase: 'Una fórmula natural para cuidar movilidad, corazón y bienestar general.', color: 'gold' },
  { name: 'Immucaps', category: 'Inmunidad', reason: 'Refuerza las defensas cuando el cuerpo necesita un apoyo extra.', phrase: 'El complemento ideal para mantener tus defensas fuertes todo el año.', color: 'sage' },
  { name: 'Qeep Young & Beauty', category: 'Anti-aging', reason: 'Su aporte antioxidante acompaña el cuidado integral y la vitalidad.', phrase: 'Belleza desde dentro: una fórmula revitalizante con antioxidantes.', color: 'peach' },
]

const prices = [
  { bottles: 2, base: 39, tm: 37, fiz: 36 },
  { bottles: 3, base: 74, tm: 70, fiz: 55 },
  { bottles: 4, base: 96, tm: 94, fiz: 88 },
  { bottles: 5, base: 116, tm: 110, fiz: 108 },
  { bottles: 6, base: 124, tm: 120, fiz: 118 },
  { bottles: 7, base: 132, tm: 128, fiz: 125 },
  { bottles: 8, base: 140, tm: 136, fiz: 132 },
  { bottles: 9, base: 148, tm: 144, fiz: 139 },
  { bottles: 10, base: 156, tm: 152, fiz: 146 },
]
const colorClasses: Record<string, string> = { sage: 'bg-[#7daf8c]', blue: 'bg-[#7da6bd]', orange: 'bg-[#d49a62]', lavender: 'bg-[#a99ac7]', rose: 'bg-[#cf8888]', teal: 'bg-[#70aaa1]', sky: 'bg-[#8baec5]', gold: 'bg-[#c9a25f]', indigo: 'bg-[#7d88b2]', pink: 'bg-[#d19ab1]', peach: 'bg-[#d9a27f]', lime: 'bg-[#9fb56c]', amber: 'bg-[#c89a53]', mint: 'bg-[#7eb39d]', plum: 'bg-[#9d7892]' }

export default function Page() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>(['Neiroflex'])
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [search, setSearch] = useState('')
  const [priceTier, setPriceTier] = useState<'base' | 'tm' | 'fiz'>('base')

  const filteredProducts = products.filter(([name, category]) => `${name} ${category}`.toLowerCase().includes(search.toLowerCase()))
  const toggle = (value: string, setter: React.Dispatch<React.SetStateAction<string[]>>) => setter(current => current.includes(value) ? current.filter(item => item !== value) : [...current, value])
  const hasSelection = selectedProducts.length > 0 || selectedSymptoms.length > 0
  const contextLabel = selectedProducts.length ? selectedProducts.join(' + ') : selectedSymptoms.join(' + ')
  const score = useMemo(() => Math.min(98, 72 + selectedProducts.length * 5 + selectedSymptoms.length * 3), [selectedProducts, selectedSymptoms])

  return (
    <main className="min-h-screen bg-[#f6f8f5] text-[#21352d]">
      <header className="border-b border-[#dce6df] bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1480px] items-center justify-between px-3 py-3 sm:px-6 sm:py-5 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-[#1d6b50] text-white shadow-sm"><Leaf size={20} strokeWidth={2.5} /></div>
            <div><p className="text-lg font-semibold tracking-tight">naturonica</p><p className="text-[10px] font-medium uppercase tracking-[.22em] text-[#759387]">Sales companion</p></div>
          </div>
          <div className="flex items-center gap-2"><span className="hidden text-sm text-[#74877d] sm:inline">Herramienta de recomendación</span><button className="rounded-full border border-[#d6e2da] px-2.5 py-2 text-xs font-medium text-[#507466] transition hover:bg-[#f2f7f3] sm:px-4 sm:text-sm" onClick={() => { setSelectedProducts([]); setSelectedSymptoms([]) }}><RotateCcw size={15} className="mr-2 inline" />Limpiar selección</button></div>
        </div>
      </header>

      <div className="mx-auto max-w-[1480px] px-2.5 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
        <section className="mb-5 flex flex-col justify-between gap-4 sm:mb-8 sm:gap-5 lg:flex-row lg:items-end"><div><div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#e2f0e7] px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#39745a]"><Sparkles size={13} />Recomendación inteligente</div><h1 className="max-w-2xl text-[1.65rem] font-semibold leading-tight tracking-[-.03em] text-[#1d332a] sm:text-4xl">Encuentra el siguiente producto ideal.</h1><p className="mt-2 max-w-xl text-[15px] leading-6 text-[#71857a]">Selecciona lo que el cliente ya compró y lo que necesita. Te ayudaremos a construir una recomendación clara y natural.</p></div><div className="rounded-2xl border border-[#dbe8df] bg-white px-5 py-3 shadow-sm"><p className="text-xs font-medium text-[#799087]">CONFIANZA DE LA SUGERENCIA</p><p className="mt-1 text-2xl font-semibold text-[#267052]">{score}% <TrendingUp size={17} className="ml-1 inline" /></p></div></section>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(420px,1.12fr)]">
          <section className="rounded-2xl border border-[#dce7df] bg-white p-3 shadow-[0_12px_40px_-24px_rgba(37,77,58,.28)] sm:rounded-3xl sm:p-7"><div className="mb-6 flex items-center justify-between"><div><p className="mb-1 text-xs font-semibold uppercase tracking-[.16em] text-[#6c9480]">Paso 01</p><h2 className="text-xl font-semibold">¿Qué compró el cliente?</h2></div><span className="rounded-full bg-[#eaf4ed] px-3 py-1 text-xs font-semibold text-[#3c7b5e]">{selectedProducts.length} seleccionados</span></div><div className="relative mb-5"><Search size={17} className="absolute left-3.5 top-3.5 text-[#9bad9f]" /><input aria-label="Buscar productos" value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar producto..." className="h-11 w-full rounded-xl border border-[#dce7df] bg-[#fbfdfb] pl-10 pr-4 text-sm outline-none transition placeholder:text-[#a1b2a9] focus:border-[#78ad91] focus:ring-3 focus:ring-[#e3f1e7]" /></div><div className="grid grid-cols-2 gap-2 sm:grid-cols-3">{filteredProducts.map(([name, category, subtitle, color]) => { const active = selectedProducts.includes(name); return <button key={name} onClick={() => toggle(name, setSelectedProducts)} aria-pressed={active} className={`group min-h-[84px] rounded-2xl border p-3 text-left transition ${active ? 'border-[#2e805d] bg-[#edf8f0] shadow-[0_4px_14px_-8px_#2e805d]' : 'border-[#e2ebe4] bg-white hover:border-[#9fc5ad] hover:bg-[#fbfefb]'}`}><div className="mb-2 flex items-start justify-between"><span className={`size-2.5 rounded-full ${colorClasses[color]}`} /><span className={`flex size-5 items-center justify-center rounded-full border ${active ? 'border-[#2e805d] bg-[#2e805d] text-white' : 'border-[#d7e3da] text-transparent'}`}><Check size={12} strokeWidth={3} /></span></div><p className="text-sm font-semibold leading-tight">{name}</p><p className="mt-1 text-[11px] text-[#84968d]">{category}</p></button> })}</div><div className="my-7 border-t border-[#edf2ee]" /><div className="mb-5 flex items-center justify-between"><div><p className="mb-1 text-xs font-semibold uppercase tracking-[.16em] text-[#6c9480]">Paso 02</p><h2 className="text-xl font-semibold">¿Qué comenta el cliente?</h2></div><span className="rounded-full bg-[#f5f0e7] px-3 py-1 text-xs font-semibold text-[#9b7442]">{selectedSymptoms.length} señales</span></div><div className="flex flex-wrap gap-2">{symptoms.map(symptom => { const active = selectedSymptoms.includes(symptom); return <button key={symptom} onClick={() => toggle(symptom, setSelectedSymptoms)} aria-pressed={active} className={`rounded-full border px-3.5 py-2 text-sm transition ${active ? 'border-[#b58b52] bg-[#fbf3e5] font-semibold text-[#8b6738]' : 'border-[#e0e9e2] text-[#668076] hover:border-[#b9cdbf] hover:bg-[#f7faf7]'}`}>{active && <Check size={14} className="mr-1 inline" />}{symptom}</button> })}</div></section>

          <section className="space-y-4"><div className="rounded-2xl bg-[#214b3b] p-4 text-white shadow-[0_14px_40px_-20px_rgba(22,70,50,.7)] sm:rounded-3xl sm:p-7"><div className="mb-6 flex items-start justify-between"><div><p className="mb-1 text-xs font-semibold uppercase tracking-[.16em] text-[#9bd3b2]">Resultado para tu conversación</p><h2 className="text-2xl font-semibold">Tu recomendación</h2></div><div className="rounded-xl bg-white/10 p-2.5"><Sparkles size={19} className="text-[#c9ebd5]" /></div></div>{hasSelection ? <><p className="mb-5 text-sm leading-6 text-[#c3dfce]">Basado en <strong className="text-white">{contextLabel}</strong>, estas opciones pueden complementar la conversación.</p><div className="space-y-3">{recommendations.map((recommendation, index) => <article key={recommendation.name} className="rounded-2xl border border-white/10 bg-white/[.08] p-4 transition hover:bg-white/[.13]"><div className="flex items-start justify-between gap-3"><div><div className="flex items-center gap-2"><span className="flex size-6 items-center justify-center rounded-full bg-[#a8d8b8] text-xs font-bold text-[#214b3b]">{index + 1}</span><h3 className="font-semibold">{recommendation.name}</h3><span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-[#b9d7c5]">{recommendation.category}</span></div><p className="mt-3 text-sm leading-5 text-[#c3dfce]"><strong className="text-[#e8f6ec]">Por qué:</strong> {recommendation.reason}</p><p className="mt-2 border-l-2 border-[#8bc69f] pl-3 text-sm italic leading-5 text-[#e1f2e6]">“{recommendation.phrase}”</p></div><span className="mt-1 text-xs font-semibold text-[#9bd3b2]">+{95 - index * 7}% match</span></div></article>)}</div></> : <div className="rounded-2xl border border-dashed border-white/20 p-8 text-center"><p className="font-medium">Empieza seleccionando un producto</p><p className="mt-1 text-sm text-[#b7d3c1]">Las recomendaciones aparecerán aquí.</p></div>}</div>

            <div className="rounded-2xl border border-[#dce7df] bg-white p-4 shadow-sm sm:rounded-3xl sm:p-7"><div className="mb-5 flex items-center justify-between"><div><p className="mb-1 text-xs font-semibold uppercase tracking-[.16em] text-[#9a794a]">Oferta recomendada</p><h2 className="text-xl font-semibold">Precio por cantidad</h2></div><button className="flex items-center gap-1 text-xs font-medium text-[#6f897c]">Ver condiciones <ChevronDown size={14} /></button></div><div className="mb-4 flex rounded-xl bg-[#f3f7f4] p-1">{(['base', 'tm', 'fiz'] as const).map(tier => <button key={tier} onClick={() => setPriceTier(tier)} className={`flex-1 rounded-lg py-2 text-xs font-semibold uppercase transition ${priceTier === tier ? 'bg-white text-[#276b4f] shadow-sm' : 'text-[#8aa095]'}`}>{tier === 'base' ? 'Precio base' : tier}</button>)}</div><div className="overflow-hidden rounded-xl border border-[#e1eae3]"><div className="grid grid-cols-3 bg-[#f8faf8] px-4 py-2.5 text-xs font-semibold text-[#8da097]"><span>Unidades</span><span className="text-center">Precio total</span><span className="text-right">Por frasco</span></div>{prices.map(row => { const price = row[priceTier]; return <div key={row.bottles} className="grid grid-cols-3 items-center border-t border-[#edf2ee] px-4 py-3 text-sm"><span className="font-medium">{row.bottles} frascos</span><span className="text-center text-lg font-semibold text-[#286c50]">€{price}</span><span className="text-right text-xs text-[#82958b]">€{(price / row.bottles).toFixed(2)}</span></div> })}</div><p className="mt-4 text-center text-xs text-[#91a099]">Selecciona la tarifa que corresponde a tu cliente.</p></div></section>
        </div>
      </div>
    </main>
  )
}
