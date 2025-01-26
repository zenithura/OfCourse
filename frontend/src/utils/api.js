// API temel URL'i
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://ayxanmammadov.pythonanywhere.com/';

// API endpoint'leri
export const ENDPOINTS = {
    LOGIN: '/api/admin/login',
    LOGOUT: '/api/admin/logout',
    CHECK_AUTH: '/api/admin/check-auth',
    COURSES: '/api/courses',
    CATEGORIES: '/api/categories',
    TAGS: '/api/tags',
    ADMIN_COURSES: '/api/admin/courses',
    REMOVE_DISCOUNTS: '/api/admin/remove-discounts',
    DOWNLOAD: '/api/download'
};

// API çağrıları için yardımcı fonksiyonlar
export const api = {
    // GET isteği
    async get(endpoint, params = {}) {
        const url = new URL(API_BASE_URL + endpoint);
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        
        const response = await fetch(url, {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return response.json();
    },

    // POST isteği
    async post(endpoint, data = {}) {
        const response = await fetch(API_BASE_URL + endpoint, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return response.json();
    },

    // PUT isteği
    async put(endpoint, data = {}) {
        const response = await fetch(API_BASE_URL + endpoint, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return response.json();
    },

    // DELETE isteği
    async delete(endpoint) {
        const response = await fetch(API_BASE_URL + endpoint, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return response.json();
    },

    // Form data ile POST isteği (dosya yükleme için)
    async postFormData(endpoint, formData) {
        const response = await fetch(API_BASE_URL + endpoint, {
            method: 'POST',
            credentials: 'include',
            body: formData
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return response.json();
    },

    // Form data ile PUT isteği (dosya güncelleme için)
    async putFormData(endpoint, formData) {
        const response = await fetch(API_BASE_URL + endpoint, {
            method: 'PUT',
            credentials: 'include',
            body: formData
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return response.json();
    }
}; 
