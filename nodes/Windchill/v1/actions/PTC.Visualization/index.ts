import * as FunctionGetWvsFeatures from './Function_GetWVSFeatures';
import * as GetRepresentation from './GetRepresentation';
import * as GetRepresentations from './GetRepresentations';
import * as PtcVisualizationRepresentationFunctionGetDynamicStructureRepresentation from './PTC.Visualization.Representation.Function_GetDynamicStructureRepresentation';
import * as PtcVisualizationRepresentationFunctionGetDynamicStructureRepresentationWith from './PTC.Visualization.Representation.Function_GetDynamicStructureRepresentation_With';
import * as PtcVisualizationRepresentationFunctionGetFidelities from './PTC.Visualization.Representation.Function_GetFidelities';
import * as PtcVisualizationRepresentationFunctionGetPvzWith from './PTC.Visualization.Representation.Function_GetPVZ_With';
import * as PtcVisualizationRepresentationFunctionGetPvzWithFidelity from './PTC.Visualization.Representation.Function_GetPVZ_With_Fidelity';

import { INodeProperties } from 'n8n-workflow';

export {
	FunctionGetWvsFeatures,
	GetRepresentation,
	GetRepresentations,
	PtcVisualizationRepresentationFunctionGetDynamicStructureRepresentation,
	PtcVisualizationRepresentationFunctionGetDynamicStructureRepresentationWith,
	PtcVisualizationRepresentationFunctionGetFidelities,
	PtcVisualizationRepresentationFunctionGetPvzWith,
	PtcVisualizationRepresentationFunctionGetPvzWithFidelity,
};

export const descriptions: INodeProperties[] = [
		{
		displayName: 'BasePath',
		name: 'basePath',
		default: '/Windchill/servlet/odata/v3/Visualization',
		type: 'hidden',
	},
		{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'PTC.Visualization',
				],
			},
		},
		default: 'GET /GetWVSFeatures()',
		options: [
			{
				name: 'Function_GetWVSFeatures',
				value: 'GET /GetWVSFeatures()',
				description: 'function to get supported WVS features - get /GetWVSFeatures()',
				action: 'Function_GetWVSFeatures',
			},
			{
				name: 'GetRepresentation',
				value: "GET /Representations('{RepresentationId}')",
				description: "Get Representation for a given RepresentationId - get /Representations('{RepresentationId}')",
				action: 'GetRepresentation',
			},
			{
				name: 'GetRepresentations',
				value: 'GET /Representations',
				description: 'Get Representations - get /Representations',
				action: 'GetRepresentations',
			},
			{
				name: 'PTC.Visualization.Representation.Function_GetDynamicStructureRepresentation',
				value: "GET /Representations('{RepresentationId}')/PTC.Visualization.GetDynamicStructureRepresentation()",
				description: "A bound function to get download URL for CreoView Dynamic Structure Representation - get /Representations('{RepresentationId}')/PTC.Visualization.GetDynamicStructureRepresentation()",
				action: 'PTC.Visualization.Representation.Function_GetDynamicStructureRepresentation',
			},
			{
				name: 'PTC.Visualization.Representation.Function_GetDynamicStructureRepresentation_With',
				value: "GET /Representations('{RepresentationId}')/PTC.Visualization.GetDynamicStructureRepresentation(NavigationCriteriaId='{NavigationCriteriaId}')",
				description: "A bound function to get download URL for CreoView Dynamic Structure Representation - get /Representations('{RepresentationId}')/PTC.Visualization.GetDynamicStructureRepresentation(NavigationCriteriaId='{NavigationCriteriaId}')",
				action: 'PTC.Visualization.Representation.Function_GetDynamicStructureRepresentation_With',
			},
			{
				name: 'PTC.Visualization.Representation.Function_GetFidelities',
				value: "GET /Representations('{RepresentationId}')/PTC.Visualization.GetFidelities()",
				description: "A bound function to return available Fidelities. - get /Representations('{RepresentationId}')/PTC.Visualization.GetFidelities()",
				action: 'PTC.Visualization.Representation.Function_GetFidelities',
			},
			{
				name: 'PTC.Visualization.Representation.Function_GetPVZ_With',
				value: "GET /Representations('{RepresentationId}')/PTC.Visualization.GetPVZ(IncludeAnnotations={IncludeAnnotations})",
				description: "A bound function to download the .zip file (pvz file) that can be opened by CreoView. - get /Representations('{RepresentationId}')/PTC.Visualization.GetPVZ(IncludeAnnotations={IncludeAnnotations})",
				action: 'PTC.Visualization.Representation.Function_GetPVZ_With',
			},
			{
				name: 'PTC.Visualization.Representation.Function_GetPVZ_With_Fidelity',
				value: "GET /Representations('{RepresentationId}')/PTC.Visualization.GetPVZ(IncludeAnnotations={IncludeAnnotations},Fidelity='{Fidelity}')",
				description: "A bound function to download the .zip file for a specific fidelity(pvz file) that can be opened by CreoView. - get /Representations('{RepresentationId}')/PTC.Visualization.GetPVZ(IncludeAnnotations={IncludeAnnotations},Fidelity='{Fidelity}')",
				action: 'PTC.Visualization.Representation.Function_GetPVZ_With_Fidelity',
			},
		],
	},
	...FunctionGetWvsFeatures.description,
	...GetRepresentation.description,
	...GetRepresentations.description,
	...PtcVisualizationRepresentationFunctionGetDynamicStructureRepresentation.description,
	...PtcVisualizationRepresentationFunctionGetDynamicStructureRepresentationWith.description,
	...PtcVisualizationRepresentationFunctionGetFidelities.description,
	...PtcVisualizationRepresentationFunctionGetPvzWith.description,
	...PtcVisualizationRepresentationFunctionGetPvzWithFidelity.description,
];
