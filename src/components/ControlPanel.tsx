import Input from './Input'


interface Props {
    form: {
        amplitudeX: number,
        amplitudeY: number,
        frequencyX: number,
        frequencyY: number,
    },
    phi: number,
    changeForm: (value: any, key: string) => void
}
const ControlPanel = ({
    form, phi, changeForm
}: Props) => {
    return (
        <div className='w-64 h-full flex flex-col border-r-[1px]'>
            <div className='p-4 flex flex-col gap-2'>
                <p className='text-2xl font-semibold'>Lissajous figure</p>
                <Input label='Amplitude X' value={`${form.amplitudeX}`} onChange={(e) => changeForm(e.target.value, 'amplitudeX')} />
                <Input label='Amplitude Y' value={`${form.amplitudeY}`} onChange={(e) => changeForm(e.target.value, 'amplitudeY')} />
                <Input label='Frequency X' value={`${form.frequencyX}`} onChange={(e) => changeForm(e.target.value, 'frequencyX')} />
                <Input label='Frequency Y' value={`${form.frequencyY}`} onChange={(e) => changeForm(e.target.value, 'frequencyY')} />
                <Input label='Phase' value={`${phi.toFixed(1)}`} disabled />
            </div>

            <div className='mt-auto border-t-[1px] p-4'>
                <p className='text-lg font-semibold'>Formula:</p>
                <p className='text-sm'>x = A sin(at + φ)</p>
                <p className='text-sm'>y = B sin(bt)</p>
            </div>
        </div>
    )
}

export default ControlPanel