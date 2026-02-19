import clsx from 'clsx'
import avatarImage from '@/assets/images/Eugene_Venger.jpg';


export function AvatarContainer({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10',
      )}
      {...props}
    />
  )
}

export function Avatar({
  large = false,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'a'>, 'href'> & {
  large?: boolean
}) {
  return (
    <a
      href="/"
      aria-label="Home"
      className={clsx(className, 'pointer-events-auto')}
      {...props}
    >
      <img
        src={typeof avatarImage === 'string' ? avatarImage : avatarImage.src}
        alt=""
        width={large ? 64 : 36}
        height={large ? 64 : 36}
        className='w-40 h-40 rounded-full object-cover flex-shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl'
      />
    </a>
  )
}