import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
    id: string
}

export const getUserIdFromToken = () => {
    const token = Cookies.get('jwt');
    if (token) {
        const decoded: JwtPayload = jwtDecode(token);
        return decoded.id;
    }

    return null;
};
