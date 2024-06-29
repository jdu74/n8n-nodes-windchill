import * as GetGroup from './GetGroup';
import * as GetGroups from './GetGroups';
import * as GetLicenseGroup from './GetLicenseGroup';
import * as GetLicenseGroups from './GetLicenseGroups';
import * as GetOrganizations from './GetOrganizations';
import * as GetPrincipal from './GetPrincipal';
import * as GetPrincipals from './GetPrincipals';
import * as GetUser from './GetUser';
import * as GetUsers from './GetUsers';
import * as GroupUsersGetUser from './Group.Users.GetUser';
import * as GroupUsersGetUsers from './Group.Users.GetUsers';
import * as LicenseGroupUsersGetUser from './LicenseGroup.Users.GetUser';
import * as LicenseGroupUsersGetUsers from './LicenseGroup.Users.GetUsers';
import * as UserGroupsGetGroup from './User.Groups.GetGroup';
import * as UserGroupsGetGroups from './User.Groups.GetGroups';
import * as UserLicenseGroupsGetLicenseGroup from './User.LicenseGroups.GetLicenseGroup';
import * as UserLicenseGroupsGetLicenseGroups from './User.LicenseGroups.GetLicenseGroups';

import { INodeProperties } from 'n8n-workflow';

export {
	GetGroup,
	GetGroups,
	GetLicenseGroup,
	GetLicenseGroups,
	GetOrganizations,
	GetPrincipal,
	GetPrincipals,
	GetUser,
	GetUsers,
	GroupUsersGetUser,
	GroupUsersGetUsers,
	LicenseGroupUsersGetUser,
	LicenseGroupUsersGetUsers,
	UserGroupsGetGroup,
	UserGroupsGetGroups,
	UserLicenseGroupsGetLicenseGroup,
	UserLicenseGroupsGetLicenseGroups,
};

export const descriptions: INodeProperties[] = [
		{
		displayName: 'basePath',
		name: 'basePath',
		type: 'hidden',
		noDataExpression: false,
		displayOptions: {
			show: {
				resource: [
					'PTC.PrincipalMgmt',
				],
			},
		},
		default: '/Windchill/servlet/odata/v5/PrincipalMgmt',
	},
		{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'PTC.PrincipalMgmt',
				],
			},
		},
		default: 'GET /Groups',
		options: [
			{
				name: 'GetGroup',
				value: "GET /Groups('{GroupId}')",
				description: "Get Group for a given GroupId - get /Groups('{GroupId}')",
				action: 'GetGroup',
			},
			{
				name: 'GetGroups',
				value: 'GET /Groups',
				description: 'Get Groups - get /Groups',
				action: 'GetGroups',
			},
			{
				name: 'GetLicenseGroup',
				value: "GET /LicenseGroups('{LicenseGroupId}')",
				description: "Get LicenseGroup for a given LicenseGroupId - get /LicenseGroups('{LicenseGroupId}')",
				action: 'GetLicenseGroup',
			},
			{
				name: 'GetLicenseGroups',
				value: 'GET /LicenseGroups',
				description: 'Get LicenseGroups - get /LicenseGroups',
				action: 'GetLicenseGroups',
			},
			{
				name: 'GetOrganizations',
				value: 'GetOrganizations',
				description: 'Get Groups of type Organization - get /Groups/PTC.PrincipalMgmt.Organization',
				action: 'GetOrganizations',
			},
			{
				name: 'GetPrincipal',
				value: "GET /Principals('{PrincipalId}')",
				description: "Get Principal for a given PrincipalId - get /Principals('{PrincipalId}')",
				action: 'GetPrincipal',
			},
			{
				name: 'GetPrincipals',
				value: 'GET /Principals',
				description: 'Get Principals - get /Principals',
				action: 'GetPrincipals',
			},
			{
				name: 'GetUser',
				value: "GET /Users('{UserId}')",
				description: "Get User for a given UserId - get /Users('{UserId}')",
				action: 'GetUser',
			},
			{
				name: 'GetUsers',
				value: 'GET /Users',
				description: 'Get Users - get /Users',
				action: 'GetUsers',
			},
			{
				name: 'Group.Users.GetUser',
				value: "GET /Groups('{GroupId}')/Users('{UserId}')",
				description: "Get User for a given UserId - get /Groups('{GroupId}')/Users('{UserId}')",
				action: 'Group.Users.GetUser',
			},
			{
				name: 'Group.Users.GetUsers',
				value: "GET /Groups('{GroupId}')/Users",
				description: "Get User - get /Groups('{GroupId}')/Users",
				action: 'Group.Users.GetUsers',
			},
			{
				name: 'LicenseGroup.Users.GetUser',
				value: "GET /LicenseGroups('{LicenseGroupId}')/Users('{UserId}')",
				description: "Get User for a given UserId - get /LicenseGroups('{LicenseGroupId}')/Users('{UserId}')",
				action: 'LicenseGroup.Users.GetUser',
			},
			{
				name: 'LicenseGroup.Users.GetUsers',
				value: "GET /LicenseGroups('{LicenseGroupId}')/Users",
				description: "Get User - get /LicenseGroups('{LicenseGroupId}')/Users",
				action: 'LicenseGroup.Users.GetUsers',
			},
			{
				name: 'User.Groups.GetGroup',
				value: "GET /Users('{UserId}')/Groups('{GroupId}')",
				description: "Get Group for a given GroupId - get /Users('{UserId}')/Groups('{GroupId}')",
				action: 'User.Groups.GetGroup',
			},
			{
				name: 'User.Groups.GetGroups',
				value: "GET /Users('{UserId}')/Groups",
				description: "Get Group - get /Users('{UserId}')/Groups",
				action: 'User.Groups.GetGroups',
			},
			{
				name: 'User.LicenseGroups.GetLicenseGroup',
				value: "GET /Users('{UserId}')/LicenseGroups('{LicenseGroupId}')",
				description: "Get LicenseGroup for a given LicenseGroupId - get /Users('{UserId}')/LicenseGroups('{LicenseGroupId}')",
				action: 'User.LicenseGroups.GetLicenseGroup',
			},
			{
				name: 'User.LicenseGroups.GetLicenseGroups',
				value: "GET /Users('{UserId}')/LicenseGroups",
				description: "Get LicenseGroup - get /Users('{UserId}')/LicenseGroups",
				action: 'User.LicenseGroups.GetLicenseGroups',
			},
		],
	},
	...GetGroup.description,
	...GetGroups.description,
	...GetLicenseGroup.description,
	...GetLicenseGroups.description,
	...GetOrganizations.description,
	...GetPrincipal.description,
	...GetPrincipals.description,
	...GetUser.description,
	...GetUsers.description,
	...GroupUsersGetUser.description,
	...GroupUsersGetUsers.description,
	...LicenseGroupUsersGetUser.description,
	...LicenseGroupUsersGetUsers.description,
	...UserGroupsGetGroup.description,
	...UserGroupsGetGroups.description,
	...UserLicenseGroupsGetLicenseGroup.description,
	...UserLicenseGroupsGetLicenseGroups.description,
];
