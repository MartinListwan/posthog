import { PersonType } from '~/types'
import React from 'react'
import { IconPerson } from 'lib/components/icons'
import rrwebBlockClass from 'lib/utils/rrwebBlockClass'

export function PersonHeader({ person }: { person: PersonType }): JSX.Element {
    return (
        <>
            {person.is_identified ? (
                <div className="person-header identified">
                    <span>
                        <IconPerson />
                    </span>
                    {person.properties.email ? (
                        <span className={`text-ellipsis ${rrwebBlockClass}`}>{person.properties.email}</span>
                    ) : (
                        <i>No email recorded</i>
                    )}
                </div>
            ) : (
                <div className="person-header anonymous">
                    <IconPerson /> Anonymous user
                </div>
            )}
        </>
    )
}
