import { INodeProperties } from "n8n-workflow";

export const PtcVisualizationRepresentationFunctionGetPvzWithDescription: INodeProperties[] = [
	{
		displayName: 'RepresentationId',
		name: 'RepresentationId-string(path)',
		description: 'Representation ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Visualization',
				],
				operation: [
					"GET /Representations('{RepresentationId}')/PTC.Visualization.GetPVZ(IncludeAnnotations={IncludeAnnotations})",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'IncludeAnnotations',
		name: 'IncludeAnnotations-boolean(path)',
		description: 'Whether Include Annotations - boolean (path)',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'PTC.Visualization',
				],
				operation: [
					"GET /Representations('{RepresentationId}')/PTC.Visualization.GetPVZ(IncludeAnnotations={IncludeAnnotations})",
				],
			},
		},
		required: true,
	},
];
