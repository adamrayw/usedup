import React from 'react'
import { useParams } from 'react-router-dom'
import FormMobilBekas from './form-jual/FormMobilBekas'
import FormMotorBekas from './form-jual/FormMotorBekas'
import FormProperty from './form-jual/FormProperty'
import FormElektronik from './form-jual/FormElektronik'

function FormJual() {
    let { slug } = useParams()

    if (slug === 'mobil-bekas') {
        return (
            <>
                <FormMobilBekas />
            </>
        )
    } else if (slug === 'motor-bekas') {
        return (
            <>
                <FormMotorBekas />
            </>
        )
    } else if (slug === 'property') {
        return (
            <>
                <FormProperty />
            </>
        )
    } else if (slug === 'elektronik-gadget') {
        return (
            <>
                <FormElektronik />
            </>
        )
    }

}

export default FormJual