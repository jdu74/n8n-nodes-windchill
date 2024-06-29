import * as ContainerCreatorGetUser from './Container.Creator.GetUser';
import * as ContainerFoldersDeletePtcDataAdminFolder from './Container.Folders.DeletePTC.DataAdmin.Folder';
import * as ContainerFoldersGetFolder from './Container.Folders.GetFolder';
import * as ContainerFoldersGetFolders from './Container.Folders.GetFolders';
import * as ContainerFoldersPostFolder from './Container.Folders.PostFolder';
import * as ContainerFoldersUpdateFolder from './Container.Folders.UpdateFolder';
import * as ContainerOrganizationGetOrganization from './Container.Organization.GetOrganization';
import * as GetContainer from './GetContainer';
import * as GetContainers from './GetContainers';
import * as GetLibraryContainers from './GetLibraryContainers';
import * as GetOrganizationContainers from './GetOrganizationContainers';
import * as GetProductContainers from './GetProductContainers';
import * as GetProjectContainers from './GetProjectContainers';
import * as GetSites from './GetSites';
import * as PtcDataAdminContainerFunctionGetConstraintsWithDriverProperties from './PTC.DataAdmin.Container.Function_GetConstraints_With_@DriverProperties';
import * as PtcDataAdminContainerFunctionGetConstraintsWithEntityVersionDriverProperties from './PTC.DataAdmin.Container.Function_GetConstraints_With_EntityVersion_@DriverProperties';
import * as PtcDataAdminContainerFunctionGetConstraintsWithEntityVersionPropertyNameDriverProperties from './PTC.DataAdmin.Container.Function_GetConstraints_With_EntityVersion_PropertyName_@DriverProperties';
import * as PtcDataAdminContainerFunctionGetConstraintsWithPropertyNameDriverProperties from './PTC.DataAdmin.Container.Function_GetConstraints_With_PropertyName_@DriverProperties';
import * as PtcDataAdminContainerFunctionGetDriverPropertiesWith from './PTC.DataAdmin.Container.Function_GetDriverProperties_With';
import * as PtcDataAdminContainerFunctionGetDriverPropertiesWithEntityVersion from './PTC.DataAdmin.Container.Function_GetDriverProperties_With_EntityVersion';
import * as PtcDataAdminContainerFunctionGetPregeneratedValueWithEntityVersionPropertyNameDriverProperties from './PTC.DataAdmin.Container.Function_GetPregeneratedValue_With_EntityVersion_PropertyName_@DriverProperties';
import * as PtcDataAdminContainerFunctionGetPregeneratedValueWithPropertyNameDriverProperties from './PTC.DataAdmin.Container.Function_GetPregeneratedValue_With_PropertyName_@DriverProperties';

import { INodeProperties } from 'n8n-workflow';

export {
	ContainerCreatorGetUser,
	ContainerFoldersDeletePtcDataAdminFolder,
	ContainerFoldersGetFolder,
	ContainerFoldersGetFolders,
	ContainerFoldersPostFolder,
	ContainerFoldersUpdateFolder,
	ContainerOrganizationGetOrganization,
	GetContainer,
	GetContainers,
	GetLibraryContainers,
	GetOrganizationContainers,
	GetProductContainers,
	GetProjectContainers,
	GetSites,
	PtcDataAdminContainerFunctionGetConstraintsWithDriverProperties,
	PtcDataAdminContainerFunctionGetConstraintsWithEntityVersionDriverProperties,
	PtcDataAdminContainerFunctionGetConstraintsWithEntityVersionPropertyNameDriverProperties,
	PtcDataAdminContainerFunctionGetConstraintsWithPropertyNameDriverProperties,
	PtcDataAdminContainerFunctionGetDriverPropertiesWith,
	PtcDataAdminContainerFunctionGetDriverPropertiesWithEntityVersion,
	PtcDataAdminContainerFunctionGetPregeneratedValueWithEntityVersionPropertyNameDriverProperties,
	PtcDataAdminContainerFunctionGetPregeneratedValueWithPropertyNameDriverProperties,
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
					'PTC.DataAdmin',
				],
			},
		},
		default: '/Windchill/servlet/odata/v6/DataAdmin',
	},
		{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'PTC.DataAdmin',
				],
			},
		},
		default: 'GET /Containers',
		options: [
			{
				name: 'Container.Creator.GetUser',
				value: "GET /Containers('{ContainerId}')/Creator",
				description: "Get User - get /Containers('{ContainerId}')/Creator",
				action: 'Container.Creator.GetUser',
			},
			{
				name: 'Container.Folders.DeletePTC.DataAdmin.Folder',
				value: "DELETE /Containers('{ContainerId}')/Folders('{FolderId}')",
				description: "Delete an existing Folder - delete /Containers('{ContainerId}')/Folders('{FolderId}')",
				action: 'Container.Folders.DeletePTC.DataAdmin.Folder',
			},
			{
				name: 'Container.Folders.GetFolder',
				value: "GET /Containers('{ContainerId}')/Folders('{FolderId}')",
				description: "Get Folder for a given FolderId - get /Containers('{ContainerId}')/Folders('{FolderId}')",
				action: 'Container.Folders.GetFolder',
			},
			{
				name: 'Container.Folders.GetFolders',
				value: "GET /Containers('{ContainerId}')/Folders",
				description: "Get Folder - get /Containers('{ContainerId}')/Folders",
				action: 'Container.Folders.GetFolders',
			},
			{
				name: 'Container.Folders.PostFolder',
				value: "POST /Containers('{ContainerId}')/Folders",
				description: "Create Folder - post /Containers('{ContainerId}')/Folders",
				action: 'Container.Folders.PostFolder',
			},
			{
				name: 'Container.Folders.UpdateFolder',
				value: "PATCH /Containers('{ContainerId}')/Folders('{FolderId}')",
				description: "Update an existing Folder - patch /Containers('{ContainerId}')/Folders('{FolderId}')",
				action: 'Container.Folders.UpdateFolder',
			},
			{
				name: 'Container.Organization.GetOrganization',
				value: "GET /Containers('{ContainerId}')/Organization",
				description: "Get Organization - get /Containers('{ContainerId}')/Organization",
				action: 'Container.Organization.GetOrganization',
			},
			{
				name: 'GetContainer',
				value: "GET /Containers('{ContainerId}')",
				description: "Get Container for a given ContainerId - get /Containers('{ContainerId}')",
				action: 'GetContainer',
			},
			{
				name: 'GetContainers',
				value: 'GET /Containers',
				description: 'Get Containers - get /Containers',
				action: 'GetContainers',
			},
			{
				name: 'GetLibraryContainers',
				value: 'GET /Containers/PTC.DataAdmin.LibraryContainer',
				description: 'Get Containers of type LibraryContainer - get /Containers/PTC.DataAdmin.LibraryContainer',
				action: 'GetLibraryContainers',
			},
			{
				name: 'GetOrganizationContainers',
				value: 'GET /Containers/PTC.DataAdmin.OrganizationContainer',
				description: 'Get Containers of type OrganizationContainer - get /Containers/PTC.DataAdmin.OrganizationContainer',
				action: 'GetOrganizationContainers',
			},
			{
				name: 'GetProductContainers',
				value: 'GET /Containers/PTC.DataAdmin.ProductContainer',
				description: 'Get Containers of type ProductContainer - get /Containers/PTC.DataAdmin.ProductContainer',
				action: 'GetProductContainers',
			},
			{
				name: 'GetProjectContainers',
				value: 'GET /Containers/PTC.DataAdmin.ProjectContainer',
				description: 'Get Containers of type ProjectContainer - get /Containers/PTC.DataAdmin.ProjectContainer',
				action: 'GetProjectContainers',
			},
			{
				name: 'GetSites',
				value: 'GET /Containers/PTC.DataAdmin.Site',
				description: 'Get Containers of type Site - get /Containers/PTC.DataAdmin.Site',
				action: 'GetSites',
			},
			{
				name: 'PTC.DataAdmin.Container.Function_GetConstraints_With_@DriverProperties',
				value: "GET /Containers('{ContainerId}')/PTC.DataAdmin.GetConstraints(EntityName='{EntityName}',DriverProperties=@DriverProperties)",
				description: "Function to find all the constraints on all properties for a Windchill type - get /Containers('{ContainerId}')/PTC.DataAdmin.GetConstraints(EntityName='{EntityName}',DriverProperties=@DriverProperties)",
				action: 'PTC.DataAdmin.Container.Function_GetConstraints_With_@DriverProperties',
			},
			{
				name: 'PTC.DataAdmin.Container.Function_GetConstraints_With_EntityVersion_@DriverProperties',
				value: "GET /Containers('{ContainerId}')/PTC.DataAdmin.GetConstraints(EntityName='{EntityName}',EntityVersion='{EntityVersion}',DriverProperties=@DriverProperties)",
				description: "Function to find all the constraints on all properties for a given entity name and version - get /Containers('{ContainerId}')/PTC.DataAdmin.GetConstraints(EntityName='{EntityName}',EntityVersion='{EntityVersion}',DriverProperties=@DriverProperties)",
				action: 'PTC.DataAdmin.Container.Function_GetConstraints_With_EntityVersion_@DriverProperties',
			},
			{
				name: 'PTC.DataAdmin.Container.Function_GetConstraints_With_EntityVersion_PropertyName_@DriverProperties',
				value: "GET /Containers('{ContainerId}')/PTC.DataAdmin.GetConstraints(EntityName='{EntityName}',EntityVersion='{EntityVersion}',PropertyName='{PropertyName}',DriverProperties=@DriverProperties)",
				description: "Function to find all the constraints for a property on a given entity name and version - get /Containers('{ContainerId}')/PTC.DataAdmin.GetConstraints(EntityName='{EntityName}',EntityVersion='{EntityVersion}',PropertyName='{PropertyName}',DriverProperties=@DriverProperties)",
				action: 'PTC.DataAdmin.Container.Function_GetConstraints_With_EntityVersion_PropertyName_@DriverProperties',
			},
			{
				name: 'PTC.DataAdmin.Container.Function_GetConstraints_With_PropertyName_@DriverProperties',
				value: "GET /Containers('{ContainerId}')/PTC.DataAdmin.GetConstraints(EntityName='{EntityName}',PropertyName='{PropertyName}',DriverProperties=@DriverProperties)",
				description: "Function to find all the constraints for a property on a Windchill type - get /Containers('{ContainerId}')/PTC.DataAdmin.GetConstraints(EntityName='{EntityName}',PropertyName='{PropertyName}',DriverProperties=@DriverProperties)",
				action: 'PTC.DataAdmin.Container.Function_GetConstraints_With_PropertyName_@DriverProperties',
			},
			{
				name: 'PTC.DataAdmin.Container.Function_GetDriverProperties_With',
				value: "GET /Containers('{ContainerId}')/PTC.DataAdmin.GetDriverProperties(EntityName='{EntityName}')",
				description: "Function to find the Driver Attributes for a Windchill type - get /Containers('{ContainerId}')/PTC.DataAdmin.GetDriverProperties(EntityName='{EntityName}')",
				action: 'PTC.DataAdmin.Container.Function_GetDriverProperties_With',
			},
			{
				name: 'PTC.DataAdmin.Container.Function_GetDriverProperties_With_EntityVersion',
				value: "GET /Containers('{ContainerId}')/PTC.DataAdmin.GetDriverProperties(EntityName='{EntityName}',EntityVersion='{EntityVersion}')",
				description: "Function to find the Driver Attributes for a given entity name and version - get /Containers('{ContainerId}')/PTC.DataAdmin.GetDriverProperties(EntityName='{EntityName}',EntityVersion='{EntityVersion}')",
				action: 'PTC.DataAdmin.Container.Function_GetDriverProperties_With_EntityVersion',
			},
			{
				name: 'PTC.DataAdmin.Container.Function_GetPregeneratedValue_With_EntityVersion_PropertyName_@DriverProperties',
				value: "GET /Containers('{ContainerId}')/PTC.DataAdmin.GetPregeneratedValue(EntityName='{EntityName}',EntityVersion='{EntityVersion}',PropertyName='{PropertyName}',DriverProperties=@DriverProperties)",
				description: "Function to get a pregenerated value (like Number) before an entity is created - get /Containers('{ContainerId}')/PTC.DataAdmin.GetPregeneratedValue(EntityName='{EntityName}',EntityVersion='{EntityVersion}',PropertyName='{PropertyName}',DriverProperties=@DriverProperties)",
				action: 'PTC.DataAdmin.Container.Function_GetPregeneratedValue_With_EntityVersion_PropertyName_@DriverProperties',
			},
			{
				name: 'PTC.DataAdmin.Container.Function_GetPregeneratedValue_With_PropertyName_@DriverProperties',
				value: "GET /Containers('{ContainerId}')/PTC.DataAdmin.GetPregeneratedValue(EntityName='{EntityName}',PropertyName='{PropertyName}',DriverProperties=@DriverProperties)",
				description: "Function to get a pregenerated value (like Number) before an entity is created - get /Containers('{ContainerId}')/PTC.DataAdmin.GetPregeneratedValue(EntityName='{EntityName}',PropertyName='{PropertyName}',DriverProperties=@DriverProperties)",
				action: 'PTC.DataAdmin.Container.Function_GetPregeneratedValue_With_PropertyName_@DriverProperties',
			},
		],
	},
	...ContainerCreatorGetUser.description,
	...ContainerFoldersDeletePtcDataAdminFolder.description,
	...ContainerFoldersGetFolder.description,
	...ContainerFoldersGetFolders.description,
	...ContainerFoldersPostFolder.description,
	...ContainerFoldersUpdateFolder.description,
	...ContainerOrganizationGetOrganization.description,
	...GetContainer.description,
	...GetContainers.description,
	...GetLibraryContainers.description,
	...GetOrganizationContainers.description,
	...GetProductContainers.description,
	...GetProjectContainers.description,
	...GetSites.description,
	...PtcDataAdminContainerFunctionGetConstraintsWithDriverProperties.description,
	...PtcDataAdminContainerFunctionGetConstraintsWithEntityVersionDriverProperties.description,
	...PtcDataAdminContainerFunctionGetConstraintsWithEntityVersionPropertyNameDriverProperties.description,
	...PtcDataAdminContainerFunctionGetConstraintsWithPropertyNameDriverProperties.description,
	...PtcDataAdminContainerFunctionGetDriverPropertiesWith.description,
	...PtcDataAdminContainerFunctionGetDriverPropertiesWithEntityVersion.description,
	...PtcDataAdminContainerFunctionGetPregeneratedValueWithEntityVersionPropertyNameDriverProperties.description,
	...PtcDataAdminContainerFunctionGetPregeneratedValueWithPropertyNameDriverProperties.description,
];
