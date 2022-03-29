
const routes = [
  {
    path: '/',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '',
        name: 'Login',
      component: () => import('pages/LogIn.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('pages/Home.vue')
    },
    {
      path: 'profile',
      name: 'Profile',
      component: () => import('pages/Profile.vue')
    },
    {
      path: 'edit-profile',
      name: 'EditProfile',
      component: () => import('pages/EditProfile.vue')
    },
    {
      path: 'change-password',
      name: 'ChangePassword',
      component: () => import('pages/ChangePassword.vue')
    },
    
  ]
  },
  {
    path: '/',
    component: () => import('layouts/FaceLayout.vue'),
    children: [{
      path: 'face-registeration',
      name: 'FaceRegisteration',
      component: () => import('pages/FaceRegisteration.vue')
    },
    {
      path: 'test-detection',
      name: 'test-detection',
      component: () => import('pages/TestFaceDetection.vue')
    },
  ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
