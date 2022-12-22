import Link from 'next/link'
import clsx from 'clsx'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const defaultStyle =
  'relative inline-flex items-center px-4 py-2 text-sm font-medium'

const defaultColor =
  'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'

const focusStyle =
  'focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'

function Button({ buttonType = 'button', className, href, ...props }) {
  className = clsx(defaultStyle, defaultColor, focusStyle, className)
  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} type={buttonType} />
  )
}

export function Basic({ items }) {
  return (
    <span className="isolate inline-flex rounded-md shadow-sm">
      {items.map((item, index) => (
        <Button
          className={clsx(
            index > 0 && '-ml-px',
            index == 0 && 'rounded-l-md',
            index == items.length - 1 && 'rounded-r-md'
          )}
          href={item.href}
          key={index}
        >
          {item.text}
        </Button>
      ))}
    </span>
  )
}

export function OnlyIcon({ children }) {
  return (
    <span className="isolate inline-flex rounded-md shadow-sm">
      {children.map((item, index) => (
        <Button
          className={clsx(
            index > 0 && '-ml-px',
            index == 0 && 'rounded-l-md',
            index == children.length - 1 && 'rounded-r-md'
          )}
          href={item.props.href}
          key={index}
        >
          <span className="sr-only">{item.props.text}</span>
          {item}
        </Button>
      ))}
    </span>
  )
}

export function Dropdown({ items, text }) {
  return (
    <div className="inline-flex rounded-md shadow-sm">
      <Button className="rounded-l-md">{text}</Button>
      <Menu as="div" className="relative -ml-px block">
        <Menu.Button
          className={clsx(
            defaultStyle,
            defaultColor,
            focusStyle,
            'rounded-r-md px-2'
          )}
        >
          <span className="sr-only">Open options</span>
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 -mr-1 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {items.map((item) => (
                <Menu.Item key={item.name} disabled={item.disabled}>
                  {({ active }) => (
                    <a
                      href={item.href}
                      className={clsx(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        item.disabled && 'cursor-not-allowed opacity-75',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      {item.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export function CheckboxDropdown() {
  return (
    <span className="inline-flex rounded-md shadow-sm">
      <span className="inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2">
        <label htmlFor="select-all" className="sr-only">
          Select all
        </label>
        <input
          id="select-all"
          type="checkbox"
          name="select-all"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
      </span>
      <label htmlFor="message-type" className="sr-only">
        Select message type
      </label>
      <select
        id="message-type"
        name="message-type"
        className="-ml-px block w-full rounded-l-none rounded-r-md border border-gray-300 bg-white py-2 pl-3 pr-9 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      >
        <option>Unread messages</option>
        <option>Sent messages</option>
        <option>All messages</option>
      </select>
    </span>
  )
}
