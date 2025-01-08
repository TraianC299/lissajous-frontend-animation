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
        <div className='w-64 p-4 flex flex-col gap-2'>
            <p className='text-2xl font-semibold'>Lissajous</p>
            <Input label='a' value={`${form.amplitudeX}`} onChange={(e) => changeForm(e.target.value, 'amplitudeX')} />
            <Input label='b' value={`${form.amplitudeY}`} onChange={(e) => changeForm(e.target.value, 'amplitudeY')} />
            <Input label='A' value={`${form.frequencyX}`} onChange={(e) => changeForm(e.target.value, 'frequencyX')} />
            <Input label='B' value={`${form.frequencyY}`} onChange={(e) => changeForm(e.target.value, 'frequencyY')} />
            <Input label='Phase' value={`${phi}`} disabled />

            <div className='mt-auto'>
                <p className='text-lg'>Formula:</p>
                <p className='text-sm'>x = A sin(at + φ)</p>
                <p className='text-sm'>y = B sin(bt)</p>
            </div>
        </div>
    )
}

export default ControlPanel