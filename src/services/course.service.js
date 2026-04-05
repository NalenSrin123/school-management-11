const BASE_URL = "https://school-management-11-main-oxrub0.laravel.cloud/api";

function getAuthHeaders() {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function handleResponse(response) {
  const data = await response.json().catch(() => null);
  if (!response.ok) {
    const message = data?.message || `API error: ${response.status}`;
    const error = new Error(message);
    if (response.status === 422 && data?.errors) {
      error.validationErrors = data.errors;
    }
    throw error;
  }
  return data?.data ?? data;
}

export async function getCourses() {
  const response = await fetch(`${BASE_URL}/courses`, {
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
  });
  return handleResponse(response);
}

export async function getCourseById(id) {
  const response = await fetch(`${BASE_URL}/courses/${id}`, {
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
  });
  return handleResponse(response);
}

export async function createCourse(course) {
  const response = await fetch(`${BASE_URL}/courses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
    body: JSON.stringify(course),
  });
  return handleResponse(response);
}

export async function updateCourse(id, course) {
  const response = await fetch(`${BASE_URL}/courses/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
    body: JSON.stringify(course),
  });
  return handleResponse(response);
}

export async function deleteCourse(id) {
  const response = await fetch(`${BASE_URL}/courses/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
  });
  return handleResponse(response);
}

const courseService = {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};

export default courseService;
