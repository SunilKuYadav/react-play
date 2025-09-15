// Comprehensive sample data for nested checkbox components
// Includes various scenarios like permissions, categories, file systems, etc.

// 1. PERMISSIONS/ROLES DATA
const permissionsData = [
  {
    id: "admin",
    label: "Admin Permissions",
    checked: false,
    indeterminate: false,
    disabled: false,
    children: [
      {
        id: "user_management",
        label: "User Management",
        checked: false,
        indeterminate: false,
        disabled: false,
        children: [
          { id: "create_user", label: "Create Users", checked: true, disabled: false },
          { id: "edit_user", label: "Edit Users", checked: false, disabled: false },
          { id: "delete_user", label: "Delete Users", checked: false, disabled: false },
          { id: "view_user", label: "View Users", checked: true, disabled: false }
        ]
      },
      {
        id: "content_management",
        label: "Content Management",
        checked: false,
        indeterminate: false,
        disabled: false,
        children: [
          { id: "create_content", label: "Create Content", checked: true, disabled: false },
          { id: "edit_content", label: "Edit Content", checked: true, disabled: false },
          { id: "delete_content", label: "Delete Content", checked: false, disabled: false },
          { id: "publish_content", label: "Publish Content", checked: true, disabled: false }
        ]
      },
      {
        id: "system_settings",
        label: "System Settings",
        checked: false,
        indeterminate: false,
        disabled: false,
        children: [
          { id: "backup_restore", label: "Backup & Restore", checked: false, disabled: false },
          { id: "security_settings", label: "Security Settings", checked: false, disabled: true },
          { id: "email_config", label: "Email Configuration", checked: false, disabled: false }
        ]
      }
    ]
  },
  {
    id: "editor",
    label: "Editor Permissions",
    checked: true,
    indeterminate: false,
    disabled: false,
    children: [
      {
        id: "content_editing",
        label: "Content Editing",
        checked: true,
        indeterminate: false,
        disabled: false,
        children: [
          { id: "edit_posts", label: "Edit Posts", checked: true, disabled: false },
          { id: "edit_pages", label: "Edit Pages", checked: true, disabled: false },
          { id: "manage_media", label: "Manage Media", checked: true, disabled: false }
        ]
      },
      {
        id: "moderation",
        label: "Moderation",
        checked: false,
        indeterminate: false,
        disabled: false,
        children: [
          { id: "moderate_comments", label: "Moderate Comments", checked: false, disabled: false },
          { id: "review_submissions", label: "Review Submissions", checked: false, disabled: false }
        ]
      }
    ]
  },
  {
    id: "viewer",
    label: "Viewer Permissions",
    checked: false,
    indeterminate: false,
    disabled: false,
    children: [
      { id: "view_content", label: "View Content", checked: false, disabled: false },
      { id: "download_files", label: "Download Files", checked: false, disabled: false }
    ]
  }
];

// 2. PRODUCT CATEGORIES DATA
const categoriesData = [
  {
    id: "electronics",
    label: "Electronics",
    checked: false,
    indeterminate: false,
    count: 245,
    children: [
      {
        id: "smartphones",
        label: "Smartphones",
        checked: false,
        indeterminate: false,
        count: 89,
        children: [
          { id: "ios", label: "iOS", checked: false, count: 34 },
          { id: "android", label: "Android", checked: true, count: 45 },
          { id: "other_mobile_os", label: "Other OS", checked: false, count: 10 }
        ]
      },
      {
        id: "laptops",
        label: "Laptops",
        checked: false,
        indeterminate: false,
        count: 67,
        children: [
          { id: "gaming_laptops", label: "Gaming Laptops", checked: false, count: 23 },
          { id: "business_laptops", label: "Business Laptops", checked: false, count: 28 },
          { id: "ultrabooks", label: "Ultrabooks", checked: true, count: 16 }
        ]
      },
      {
        id: "accessories",
        label: "Accessories",
        checked: true,
        indeterminate: false,
        count: 89,
        children: [
          { id: "headphones", label: "Headphones", checked: true, count: 34 },
          { id: "chargers", label: "Chargers", checked: true, count: 28 },
          { id: "cases", label: "Cases & Covers", checked: true, count: 27 }
        ]
      }
    ]
  },
  {
    id: "clothing",
    label: "Clothing & Fashion",
    checked: false,
    indeterminate: true,
    count: 156,
    children: [
      {
        id: "mens_clothing",
        label: "Men's Clothing",
        checked: false,
        indeterminate: true,
        count: 78,
        children: [
          { id: "mens_shirts", label: "Shirts", checked: true, count: 32 },
          { id: "mens_pants", label: "Pants", checked: false, count: 25 },
          { id: "mens_shoes", label: "Shoes", checked: true, count: 21 }
        ]
      },
      {
        id: "womens_clothing",
        label: "Women's Clothing",
        checked: false,
        indeterminate: false,
        count: 78,
        children: [
          { id: "womens_dresses", label: "Dresses", checked: false, count: 29 },
          { id: "womens_tops", label: "Tops", checked: false, count: 26 },
          { id: "womens_shoes", label: "Shoes", checked: false, count: 23 }
        ]
      }
    ]
  },
  {
    id: "home_garden",
    label: "Home & Garden",
    checked: false,
    indeterminate: false,
    count: 112,
    children: [
      { id: "furniture", label: "Furniture", checked: false, count: 45 },
      { id: "kitchen", label: "Kitchen & Dining", checked: false, count: 34 },
      { id: "garden_tools", label: "Garden Tools", checked: false, count: 33 }
    ]
  }
];

// 3. FILE SYSTEM DATA
const fileSystemData = [
  {
    id: "documents",
    label: "Documents",
    type: "folder",
    checked: false,
    indeterminate: false,
    size: "2.3 GB",
    children: [
      {
        id: "work",
        label: "Work",
        type: "folder",
        checked: false,
        indeterminate: false,
        size: "1.8 GB",
        children: [
          { id: "reports", label: "Reports.pdf", type: "file", checked: true, size: "15 MB" },
          { id: "presentation", label: "Presentation.pptx", type: "file", checked: false, size: "25 MB" },
          { id: "spreadsheet", label: "Budget.xlsx", type: "file", checked: true, size: "8 MB" }
        ]
      },
      {
        id: "personal",
        label: "Personal",
        type: "folder",
        checked: false,
        indeterminate: false,
        size: "500 MB",
        children: [
          { id: "photos", label: "Vacation Photos", type: "folder", checked: false, size: "300 MB" },
          { id: "resume", label: "Resume.docx", type: "file", checked: false, size: "2 MB" }
        ]
      }
    ]
  },
  {
    id: "projects",
    label: "Projects",
    type: "folder",
    checked: true,
    indeterminate: false,
    size: "5.7 GB",
    children: [
      {
        id: "web_app",
        label: "Web Application",
        type: "folder",
        checked: true,
        indeterminate: false,
        size: "2.1 GB",
        children: [
          { id: "src_folder", label: "src/", type: "folder", checked: true, size: "500 MB" },
          { id: "node_modules", label: "node_modules/", type: "folder", checked: true, size: "1.5 GB" },
          { id: "package_json", label: "package.json", type: "file", checked: true, size: "2 KB" }
        ]
      },
      {
        id: "mobile_app",
        label: "Mobile App",
        type: "folder",
        checked: true,
        indeterminate: false,
        size: "3.6 GB",
        children: [
          { id: "ios_folder", label: "ios/", type: "folder", checked: true, size: "1.8 GB" },
          { id: "android_folder", label: "android/", type: "folder", checked: true, size: "1.8 GB" }
        ]
      }
    ]
  }
];

// 4. SURVEY/FORM DATA
const surveyData = [
  {
    id: "interests",
    label: "What are your interests?",
    type: "multiple",
    checked: false,
    indeterminate: false,
    children: [
      {
        id: "technology",
        label: "Technology",
        checked: false,
        indeterminate: false,
        children: [
          { id: "programming", label: "Programming", checked: true },
          { id: "ai_ml", label: "AI/Machine Learning", checked: false },
          { id: "cybersecurity", label: "Cybersecurity", checked: true },
          { id: "blockchain", label: "Blockchain", checked: false }
        ]
      },
      {
        id: "sports",
        label: "Sports",
        checked: false,
        indeterminate: false,
        children: [
          { id: "football", label: "Football", checked: false },
          { id: "basketball", label: "Basketball", checked: false },
          { id: "tennis", label: "Tennis", checked: true },
          { id: "swimming", label: "Swimming", checked: false }
        ]
      },
      {
        id: "arts",
        label: "Arts & Culture",
        checked: true,
        indeterminate: false,
        children: [
          { id: "music", label: "Music", checked: true },
          { id: "painting", label: "Painting", checked: true },
          { id: "theater", label: "Theater", checked: true },
          { id: "photography", label: "Photography", checked: true }
        ]
      }
    ]
  }
];

// 5. ORGANIZATION STRUCTURE DATA
const organizationData = [
  {
    id: "company",
    label: "TechCorp Inc.",
    checked: false,
    indeterminate: false,
    role: "company",
    employeeCount: 1250,
    children: [
      {
        id: "engineering",
        label: "Engineering",
        checked: false,
        indeterminate: false,
        role: "department",
        employeeCount: 450,
        children: [
          {
            id: "frontend_team",
            label: "Frontend Team",
            checked: false,
            indeterminate: false,
            role: "team",
            employeeCount: 85,
            children: [
              { id: "john_doe", label: "John Doe - Senior Developer", checked: true, role: "employee" },
              { id: "jane_smith", label: "Jane Smith - Team Lead", checked: false, role: "employee" },
              { id: "mike_johnson", label: "Mike Johnson - Developer", checked: true, role: "employee" }
            ]
          },
          {
            id: "backend_team",
            label: "Backend Team",
            checked: true,
            indeterminate: false,
            role: "team",
            employeeCount: 95,
            children: [
              { id: "sarah_wilson", label: "Sarah Wilson - Senior Developer", checked: true, role: "employee" },
              { id: "david_brown", label: "David Brown - Architect", checked: true, role: "employee" },
              { id: "lisa_davis", label: "Lisa Davis - DevOps Engineer", checked: true, role: "employee" }
            ]
          }
        ]
      },
      {
        id: "marketing",
        label: "Marketing",
        checked: false,
        indeterminate: false,
        role: "department",
        employeeCount: 120,
        children: [
          {
            id: "digital_marketing",
            label: "Digital Marketing",
            checked: false,
            indeterminate: false,
            role: "team",
            employeeCount: 45,
            children: [
              { id: "alex_taylor", label: "Alex Taylor - Marketing Manager", checked: false, role: "employee" },
              { id: "emma_garcia", label: "Emma Garcia - SEO Specialist", checked: false, role: "employee" }
            ]
          }
        ]
      },
      {
        id: "hr",
        label: "Human Resources",
        checked: false,
        indeterminate: false,
        role: "department",
        employeeCount: 35,
        children: [
          { id: "tom_anderson", label: "Tom Anderson - HR Director", checked: false, role: "employee" },
          { id: "maria_rodriguez", label: "Maria Rodriguez - Recruiter", checked: false, role: "employee" }
        ]
      }
    ]
  }
];

// 6. MENU/FEATURES DATA
const featuresData = [
  {
    id: "dashboard",
    label: "Dashboard Features",
    checked: false,
    indeterminate: false,
    children: [
      {
        id: "analytics",
        label: "Analytics",
        checked: false,
        indeterminate: false,
        premium: true,
        children: [
          { id: "real_time_stats", label: "Real-time Statistics", checked: false, premium: true },
          { id: "custom_reports", label: "Custom Reports", checked: true, premium: true },
          { id: "data_export", label: "Data Export", checked: false, premium: false }
        ]
      },
      {
        id: "user_management_features",
        label: "User Management",
        checked: true,
        indeterminate: false,
        premium: false,
        children: [
          { id: "user_profiles", label: "User Profiles", checked: true, premium: false },
          { id: "role_management", label: "Role Management", checked: true, premium: false },
          { id: "bulk_operations", label: "Bulk Operations", checked: true, premium: true }
        ]
      }
    ]
  },
  {
    id: "integrations",
    label: "Third-party Integrations",
    checked: false,
    indeterminate: false,
    children: [
      { id: "slack_integration", label: "Slack", checked: false, premium: false },
      { id: "google_workspace", label: "Google Workspace", checked: true, premium: true },
      { id: "microsoft_365", label: "Microsoft 365", checked: false, premium: true },
      { id: "zapier", label: "Zapier", checked: false, premium: true }
    ]
  }
];

// UTILITY FUNCTIONS FOR NESTED CHECKBOXES

// Calculate parent state based on children
function calculateParentState(children) {
  if (!children || children.length === 0) {
    return { checked: false, indeterminate: false };
  }

  const checkedCount = children.filter(child => child.checked).length;
  const indeterminateCount = children.filter(child => child.indeterminate).length;

  if (checkedCount === children.length && indeterminateCount === 0) {
    return { checked: true, indeterminate: false };
  } else if (checkedCount > 0 || indeterminateCount > 0) {
    return { checked: false, indeterminate: true };
  } else {
    return { checked: false, indeterminate: false };
  }
}

// Update parent states recursively
function updateParentStates(data) {
  function updateNode(node) {
    if (node.children && node.children.length > 0) {
      // First update all children
      node.children.forEach(updateNode);
      
      // Then update parent based on children
      const parentState = calculateParentState(node.children);
      node.checked = parentState.checked;
      node.indeterminate = parentState.indeterminate;
    }
  }

  if (Array.isArray(data)) {
    data.forEach(updateNode);
  } else {
    updateNode(data);
  }
  
  return data;
}

// Get all checked items
function getCheckedItems(data, includeIndeterminate = false) {
  const checkedItems = [];

  function traverse(nodes) {
    nodes.forEach(node => {
      if (node.checked || (includeIndeterminate && node.indeterminate)) {
        checkedItems.push({
          id: node.id,
          label: node.label,
          checked: node.checked,
          indeterminate: node.indeterminate
        });
      }
      
      if (node.children) {
        traverse(node.children);
      }
    });
  }

  if (Array.isArray(data)) {
    traverse(data);
  } else {
    traverse([data]);
  }

  return checkedItems;
}

// Toggle node and update children
function toggleNode(data, nodeId, checked) {
  function updateNode(nodes) {
    return nodes.map(node => {
      if (node.id === nodeId) {
        const updatedNode = {
          ...node,
          checked: checked,
          indeterminate: false
        };
        
        if (node.children) {
          updatedNode.children = setAllChildren(node.children, checked);
        }
        
        return updatedNode;
      }
      
      if (node.children) {
        return {
          ...node,
          children: updateNode(node.children)
        };
      }
      
      return node;
    });
  }

  function setAllChildren(children, checked) {
    return children.map(child => ({
      ...child,
      checked: checked,
      indeterminate: false,
      children: child.children ? setAllChildren(child.children, checked) : child.children
    }));
  }

  return updateNode(Array.isArray(data) ? data : [data]);
}

// Export all data and utilities
export {
  permissionsData,
  categoriesData,
  fileSystemData,
  surveyData,
  organizationData,
  featuresData,
  calculateParentState,
  updateParentStates,
  getCheckedItems,
  toggleNode
};