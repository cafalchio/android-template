/**
 * TODO: Update this component to use your client-side framework's link
 * component. We've provided examples of how to do this for Next.js, Remix, and
 * Inertia.js in the Catalyst documentation:
 *
 * https://catalyst.tailwindui.com/docs#client-side-router-integration
 */

import { Link as RouterLink, type LinkProps as RouterLinkProps } from 'react-router-dom'
import { DataInteractive } from '@headlessui/react'
import React, { forwardRef } from 'react'

type Props = RouterLinkProps & React.ComponentPropsWithoutRef<'a'>

export const Link = forwardRef<HTMLAnchorElement, Props>(function Link(props, ref) {
  return (
    <DataInteractive>
      <RouterLink {...props} ref={ref} />
    </DataInteractive>
  )
})