import * as ActionDownloadContentAsZip from './Action_DownloadContentAsZip';
import * as FunctionGetAllStates from './Function_GetAllStates';
import * as FunctionGetCsrfToken from './Function_GetCSRFToken';
import * as FunctionGetDependencyGraphFlat from './Function_GetDependencyGraphFlat';
import * as FunctionGetDependencyGraphFlatWithDomainVersion from './Function_GetDependencyGraphFlat_With_DomainVersion';
import * as FunctionGetDependentDomainsWithDepth from './Function_GetDependentDomains_With_Depth';
import * as FunctionGetDependentDomainsWithDomainVersionDepth from './Function_GetDependentDomains_With_DomainVersion_Depth';
import * as FunctionGetDocumentedDomains from './Function_GetDocumentedDomains';
import * as FunctionGetEnumTypeConstraintWithPropertyName from './Function_GetEnumTypeConstraint_With_propertyName';
import * as FunctionGetJwtFormRendererUrl from './Function_GetJWTFormRendererUrl';
import * as FunctionGetWindchillMetaInfo from './Function_GetWindchillMetaInfo';
import * as FunctionGetWindchillMetaInfoWith from './Function_GetWindchillMetaInfo_With';
import * as FunctionGetWindchillMetaInfoWithIncludeAncestorProperty from './Function_GetWindchillMetaInfo_With_IncludeAncestorProperty';
import * as FunctionGetWindchillMetaInfoWithIncludeDescendants from './Function_GetWindchillMetaInfo_With_IncludeDescendants';
import * as FunctionGetWindchillVersion from './Function_GetWindchillVersion';
import * as FunctionIsAssemblyInstalledWith from './Function_IsAssemblyInstalled_With';

import { INodeProperties } from 'n8n-workflow';

export {
	ActionDownloadContentAsZip,
	FunctionGetAllStates,
	FunctionGetCsrfToken,
	FunctionGetDependencyGraphFlat,
	FunctionGetDependencyGraphFlatWithDomainVersion,
	FunctionGetDependentDomainsWithDepth,
	FunctionGetDependentDomainsWithDomainVersionDepth,
	FunctionGetDocumentedDomains,
	FunctionGetEnumTypeConstraintWithPropertyName,
	FunctionGetJwtFormRendererUrl,
	FunctionGetWindchillMetaInfo,
	FunctionGetWindchillMetaInfoWith,
	FunctionGetWindchillMetaInfoWithIncludeAncestorProperty,
	FunctionGetWindchillMetaInfoWithIncludeDescendants,
	FunctionGetWindchillVersion,
	FunctionIsAssemblyInstalledWith,
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
					'PTC',
				],
			},
		},
		default: '/Windchill/servlet/odata/v4/PTC',
	},
		{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'PTC',
				],
			},
		},
		default: 'POST /DownloadContentAsZip',
		options: [
			{
				name: 'Action_DownloadContentAsZip',
				value: 'POST /DownloadContentAsZip',
				description: 'Downloads content as zip - post /DownloadContentAsZip',
				action: 'Action_DownloadContentAsZip',
			},
			{
				name: 'Function_GetAllStates',
				value: 'GET /GetAllStates()',
				description: 'Function to get a list of all valid lifecycle states in Windchill. - get /GetAllStates()',
				action: 'Function_GetAllStates',
			},
			{
				name: 'Function_GetCSRFToken',
				value: 'GET /GetCSRFToken()',
				description: 'This will return a CSRF Token (nonce) for this particular Windchill session. - get /GetCSRFToken()',
				action: 'Function_GetCSRFToken',
			},
			{
				name: 'Function_GetDependencyGraphFlat',
				value: 'GET /GetDependencyGraphFlat()',
				description: 'Get all domain dependencies as a flat list - get /GetDependencyGraphFlat()',
				action: 'Function_GetDependencyGraphFlat',
			},
			{
				name: 'Function_GetDependencyGraphFlat_With_DomainVersion',
				value: "GET /GetDependencyGraphFlat(DomainName='{DomainName}',DomainVersion='{DomainVersion}')",
				description: "Get all domain dependencies as a flat list - get /GetDependencyGraphFlat(DomainName='{DomainName}',DomainVersion='{DomainVersion}')",
				action: 'Function_GetDependencyGraphFlat_With_DomainVersion',
			},
			{
				name: 'Function_GetDependentDomains_With_Depth',
				value: "GET /GetDependentDomains(DomainName='{DomainName}',Depth='{Depth}')",
				description: "Get domains imported by a domain passed as a parameter - get /GetDependentDomains(DomainName='{DomainName}',Depth='{Depth}')",
				action: 'Function_GetDependentDomains_With_Depth',
			},
			{
				name: 'Function_GetDependentDomains_With_DomainVersion_Depth',
				value: "GET /GetDependentDomains(DomainName='{DomainName}',DomainVersion='{DomainVersion}',Depth='{Depth}')",
				description: "Get domains imported by a domain passed as a parameter - get /GetDependentDomains(DomainName='{DomainName}',DomainVersion='{DomainVersion}',Depth='{Depth}')",
				action: 'Function_GetDependentDomains_With_DomainVersion_Depth',
			},
			{
				name: 'Function_GetDocumentedDomains',
				value: 'GET /GetDocumentedDomains()',
				description: 'Returns a list of Domains that are included in the documentation tool - get /GetDocumentedDomains()',
				action: 'Function_GetDocumentedDomains',
			},
			{
				name: 'Function_GetEnumTypeConstraint_With_propertyName',
				value: "GET /GetEnumTypeConstraint(entityName='{entityName}',propertyName='{propertyName}')",
				description: "Function to find valid Windchill enumerated value pairs. See PTC.EnumType. - get /GetEnumTypeConstraint(entityName='{entityName}',propertyName='{propertyName}')",
				action: 'Function_GetEnumTypeConstraint_With_propertyName',
			},
			{
				name: 'Function_GetJWTFormRendererUrl',
				value: 'GET /GetJWTFormRendererUrl()',
				description: 'Return the URL for JWT Form renderer servlet. - get /GetJWTFormRendererUrl()',
				action: 'Function_GetJWTFormRendererUrl',
			},
			{
				name: 'Function_GetWindchillMetaInfo',
				value: 'GET /GetWindchillMetaInfo()',
				description: 'Function to get locale dependent Windchill metadata for entities and complex types present in a given domain. - get /GetWindchillMetaInfo()',
				action: 'Function_GetWindchillMetaInfo',
			},
			{
				name: 'Function_GetWindchillMetaInfo_With',
				value: 'Function_GetWindchillMetaInfo_With',
				description: "Function to get locale dependent Windchill metadata for a given entity or complex type name. - get /GetWindchillMetaInfo(EntityName='{EntityName}')",
				action: 'Function_GetWindchillMetaInfo_With',
			},
			{
				name: 'Function_GetWindchillMetaInfo_With_IncludeAncestorProperty',
				value: "GET /GetWindchillMetaInfo(EntityName='{EntityName}',IncludeAncestorProperty={IncludeAncestorProperty})",
				description: "Function to get locale dependent Windchill metadata for a given entity or complex type name with option to include inherited properties for the entity or complex type. - get /GetWindchillMetaInfo(EntityName='{EntityName}',IncludeAncestorProperty={IncludeAncestorProperty})",
				action: 'Function_GetWindchillMetaInfo_With_IncludeAncestorProperty',
			},
			{
				name: 'Function_GetWindchillMetaInfo_With_IncludeDescendants',
				value: "GET /GetWindchillMetaInfo(EntityName='{EntityName}',IncludeDescendants={IncludeDescendants})",
				description: "Function to get locale dependent Windchill metadata for a given entity or complex type name with option to include inherited properties for the entity or complex type. - get /GetWindchillMetaInfo(EntityName='{EntityName}',IncludeDescendants={IncludeDescendants})",
				action: 'Function_GetWindchillMetaInfo_With_IncludeDescendants',
			},
			{
				name: 'Function_GetWindchillVersion',
				value: 'GET /GetWindchillVersion()',
				description: 'This function returns a list of ComplexType, each complex type representing an installed module with its version. - get /GetWindchillVersion()',
				action: 'Function_GetWindchillVersion',
			},
			{
				name: 'Function_IsAssemblyInstalled_With',
				value: "GET /IsAssemblyInstalled(assemblyName='{assemblyName}')",
				description: "This will check if particular assembly is installed or not. - get /IsAssemblyInstalled(assemblyName='{assemblyName}')",
				action: 'Function_IsAssemblyInstalled_With',
			},
		],
	},
	...ActionDownloadContentAsZip.description,
	...FunctionGetAllStates.description,
	...FunctionGetCsrfToken.description,
	...FunctionGetDependencyGraphFlat.description,
	...FunctionGetDependencyGraphFlatWithDomainVersion.description,
	...FunctionGetDependentDomainsWithDepth.description,
	...FunctionGetDependentDomainsWithDomainVersionDepth.description,
	...FunctionGetDocumentedDomains.description,
	...FunctionGetEnumTypeConstraintWithPropertyName.description,
	...FunctionGetJwtFormRendererUrl.description,
	...FunctionGetWindchillMetaInfo.description,
	...FunctionGetWindchillMetaInfoWith.description,
	...FunctionGetWindchillMetaInfoWithIncludeAncestorProperty.description,
	...FunctionGetWindchillMetaInfoWithIncludeDescendants.description,
	...FunctionGetWindchillVersion.description,
	...FunctionIsAssemblyInstalledWith.description,
];
