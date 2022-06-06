import { bedTypes, BedTypes,  } from ".."

interface BedTypeStepProps {
  onBedMenuChanged: (type: BedTypes) => void
}

export function PatientTypeStep({onBedMenuChanged}: BedTypeStepProps) {
  return (
    <>
      <div className="flex py-2 gap-2 w-full">
        {Object.entries(bedTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => onBedMenuChanged(key as BedTypes)}
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}