import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Provider } from 'react-redux'
import { store } from '../stores/folderStore'

function RootLayout() {
    return (
        <>
            <div className="p-2 flex gap-2">
                <Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>
                <Link to="/about" className="[&.active]:font-bold">
                    About
                </Link>
                <Link to="/file_structure" className="[&.active]:font-bold">
                    File Structure
                </Link>
                <Link to="/collapsible" className="[&.active]:font-bold">
                    Collapsible
                </Link>
                <Link to="/table" className="[&.active]:font-bold">
                    Table
                </Link>
                <Link to="/button_with_mode_select" className="[&.active]:font-bold">
                    Button With Mode Select
                </Link>
            </div>
            <hr />
            <Provider store={store}>
                <Outlet />
            </Provider>

            <TanStackRouterDevtools />
        </>
    )
}

export const Route = createRootRoute({ component: RootLayout })
