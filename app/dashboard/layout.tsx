import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
    return(
        <div className='flex h-screnn flex-col md:flex-row md:overflow-hidden'>
            <div className='w-full flex-non md:w-64'>
                <SideNav />
            </div>
            <div className='flex-grow p-6 md_overflow-y-auto md:p-12'>{children}</div>
        </div>
    );
}
