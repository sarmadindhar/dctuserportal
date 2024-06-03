import NetworkUtil from '../../utils/NetworkUtil';

export const getRolesNavigationService = (query: any) => {
  return NetworkUtil('GET', 'role/navigationmenus', null, query);
};

export const getRolesService = (query: any) => {
  return NetworkUtil('GET', 'role', null, query);
};

export const addRoleService = (request: any) => {
  return NetworkUtil('POST', 'role', request);
};

export const getRoleService = (id: string) => {
  return NetworkUtil('GET', `role/${id}`);
};

export const updateRoleService = (id: string, request: any) => {
  return NetworkUtil('PUT', `role/${id}`, request);
};

export const deleteRoleService = (id: any) => {
  return NetworkUtil('DELETE', `role/${id}`);
};

export const calculatePermissions = (roleNavigation: any, rolePermissions: any) => {
  const allPermissions: any = {}
  roleNavigation.map((nav: any) => {
    const module = string_to_slug(nav.main_menu_name);
    nav.main_menu_actions.map((action: any) => {
      const actionName = string_to_slug(action.name);
      allPermissions[`${module}.${action.action_id}`] = `${module}.${actionName}`
    })
  })

  // console.log("All Permissions:", allPermissions)

  const grantedPermissions: any = []
  const grantedModules: any = []
  rolePermissions.map((perm: any) => {
    const module = string_to_slug(perm.main_menu_name);
    perm.main_menu_actions.map((action_id: any) => {
      const index = `${module}.${action_id}`
      grantedPermissions.push(allPermissions[index])
    })
    grantedModules.push(module)
  })

  grantedModules.map((module: string) => {
    if (module === "business_profiles" && [`${module}.create`, `${module}.edit`, `${module}.delete`, `${module}.view`].some(i => grantedPermissions.includes(i))) {
      grantedPermissions.push(`${module}.any`)
    } else if (module === "calendar" && [`${module}.create`, `${module}.edit`, `${module}.delete`, `${module}.view`].some(i => grantedPermissions.includes(i))) {
      grantedPermissions.push(`${module}.any`)
    } else if (module === "dashboard" && [`${module}.create`, `${module}.edit`, `${module}.delete`, `${module}.view`].some(i => grantedPermissions.includes(i))) {
      grantedPermissions.push(`${module}.any`)
    } else if (module === "emails" && [`${module}.create`, `${module}.edit`, `${module}.delete`, `${module}.view`].some(i => grantedPermissions.includes(i))) {
      grantedPermissions.push(`${module}.any`)
    } else if (module === "license_types" && [`${module}.create`, `${module}.edit`, `${module}.delete`, `${module}.view`].some(i => grantedPermissions.includes(i))) {
      grantedPermissions.push(`${module}.any`)
    } else if (module === "requests" && [`${module}.create`, `${module}.edit`, `${module}.delete`, `${module}.view`].some(i => grantedPermissions.includes(i))) {
      grantedPermissions.push(`${module}.any`)
    } else if (module === "roles" && [`${module}.create`, `${module}.edit`, `${module}.delete`, `${module}.view`].some(i => grantedPermissions.includes(i))) {
      grantedPermissions.push(`${module}.any`)
    } else if (module === "users" && [`${module}.create`, `${module}.edit`, `${module}.delete`, `${module}.view`].some(i => grantedPermissions.includes(i))) {
      grantedPermissions.push(`${module}.any`)
    } else if (module === "workflows" && [`${module}.create`, `${module}.edit`, `${module}.delete`, `${module}.view`].some(i => grantedPermissions.includes(i))) {
      grantedPermissions.push(`${module}.any`)
    }
    else if (module === "fines" && [`${module}.create`, `${module}.edit`, `${module}.delete`, `${module}.view`].some(i => grantedPermissions.includes(i))) {
      grantedPermissions.push(`${module}.any`)
    }
    else if (module === "reports" && [`${module}.create`, `${module}.edit`, `${module}.delete`, `${module}.view`].some(i => grantedPermissions.includes(i))) {
      grantedPermissions.push(`${module}.any`)
    }
  })

  console.log(grantedModules)

  return grantedPermissions;
}

function string_to_slug (str: string) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to   = "aaaaeeeeiiiioooouuuunc------";
  for (var i=0, l=from.length ; i<l ; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '_') // collapse whitespace and replace by -
      .replace(/_+/g, '_'); // collapse dashes

  return str;
}

